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
  const userId = auth?.currentUser?.uid

  //save new games from api in FS 
  const saveGamesInFS = () => {
    console.log("User ID", userId)
    response.data.forEach(async (match) => {
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

  // calculate the points scored after match is finished
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
    let totalPoints = 0
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
          "stats.away_score": matchInfo.stats.away_score,
          "stats.ft_score": matchInfo.stats.ft_score,
          "stats.home_score": matchInfo.stats.home_score,
          "stats.ht_score": matchInfo.stats.ht_score,
          "status": matchInfo.status,
          "status_code": matchInfo.status_code,
          "stats.points": points
        });
        totalPoints += points;

      }
    });
    const matchDocRef = doc(db, "users", userId)
    updateDoc(matchDocRef, {
      "pointsScored": totalPoints
    });
  }


  useEffect(() => {
    setAuth(userInfo)
  }, [userInfo]);

  useEffect(() => {
    document.title = "Pool - Homepage";
  }, []);

  useEffect(() => {
    console.log(response)
    userId && response && saveGamesInFS()
    userId && response && calcPoints()
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
