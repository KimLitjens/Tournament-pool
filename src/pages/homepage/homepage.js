import React, { useEffect, useState } from 'react';
import { Homepage } from '../../components'
import SidebarLeftContainer from '../../containers/sidebarLeft'
import HeaderContainer from '../../containers/header'
import FooterContainer from '../../containers/footer'
import TopScorersContainer from '../../containers/topScorers'
import ScoreForm from '../../containers/scoreForm'
import { useAuth } from '../../utils/hooks/useAuth';
import { useAllMatches } from '../../utils/hooks/allMatches';
import { setDoc, doc, getDoc, collection, getDocs, updateDoc } from "firebase/firestore"
import { db } from '../../firebase';



const HomePage = () => {
  const userInfo = useAuth();
  const [auth, setAuth] = useState({});

  const { response, error } = useAllMatches();

  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo]);

  useEffect(() => {
    document.title = "Pool - Homepage";
  }, []);

  const userId = auth?.currentUser?.uid

  const saveGamesInFS = () => {
    response.data.forEach(async function (match) {
      const matchId = '' + match.match_id
      const docRef = doc(db, "users", userId, "predictions", matchId);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        try {
          setDoc(docRef, match);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    })
  }

  const pointsScored = (homeScore, awayScore, homePrediction, awayPrediction) => {
    if (homePrediction === homeScore &&
      awayPrediction === awayScore) {
      return 4
    } else if (homePrediction - awayPrediction === homeScore - awayScore) {
      return 3
    } else if (homePrediction > awayPrediction &&
      homeScore > awayScore) {
      return 2
    } else if (homePrediction < awayPrediction &&
      homeScore < awayScore) {
      return 2
    } else {
      return 0
    }
  }

  const calcPoints = async () => {
    const querySnapshot = await getDocs(collection(db, "users", userId, "predictions"));
    querySnapshot.forEach((match) => {
      const matchInfo = match.data()
      const matchId = '' + matchInfo.match_id
      const matchDocRef = doc(db, "users", userId, "predictions", matchId)
      const points = pointsScored(
        matchInfo.stats.home_score,
        matchInfo.stats.away_score,
        matchInfo.stats.home_prediction,
        matchInfo.stats.away_prediction)
      if (matchInfo.stats.ft_score) {
        updateDoc(matchDocRef, {
          "stats.points": points
        })
      }
    });
  }

  useEffect(() => {
    response && saveGamesInFS()
    response && calcPoints()
  }, [response])

  return (
    <Homepage.Page>
      <HeaderContainer />
      <Homepage.MainPart >
        <SidebarLeftContainer response={response} numGames={8} userId={userId} />
        <Homepage.MiddlePart>
          <ScoreForm response={response} error={error} userId={userId} />
        </Homepage.MiddlePart>
        <TopScorersContainer />
      </Homepage.MainPart>
      <FooterContainer />
    </Homepage.Page>
  );
};

export default HomePage;
