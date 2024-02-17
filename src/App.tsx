import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

export default function App() {
  // const [questions, setQuestions] = React.useState<any[]>([]);
  // // Purpose: stores the clicks for each question. Tracked in QuestionNavigation
  // const [analytics_clicks, setAnalyticsClicks] = React.useState<any[]>([]);
  // // Purpose: stores the time for each question. Tracked in QuestionView
  // const [analytics_time, setAnalyticsTime] = React.useState<any[]>([]);
  // // Purpose: stores the clicks for the helpline. Tracked in HelpNavigation
  // const [analytics_helpline_clicks, setAnalyticsHelplineClicks] =
  //   React.useState<number>(0);
  // // Purpose: stores the number of times a glossary term is hovered over. Tracked in QuestionView
  // const [analytics_glossary_hover, setAnalyticsGlossaryHover] = React.useState<{
  //   [key: string]: number;
  // }>({
  //   sometimes: 0,
  // });
  // // Purpose: used for navigation and keeping track of what page for analytics
  // const [currentPage, setCurrentPage] = React.useState<number>(0);
  // const carouselRef = React.useRef<any>(null);

  // const [questionMenu, setQuestionMenu] = useState<any[]>(
  //   questionMenuItems(questions)
  // );
  // // Purpose: fetches the questions from the server
  // useEffect(() => {
  //   axios("api/questions").then((res) => {
  //     setQuestions(res.data);
  //     initializeAnalyticsArray(res.data.length);
  //     setQuestionMenu(questionMenuItems(res.data));
  //   });
  // }, []);

  // const initializeAnalyticsArray = (length: number) => {
  //   // Purpose: accounts for the introduction page
  //   length = length + 1;
  //   const newAnalyticsClicks = Array.from({ length }, () => {
  //     return { backClicks: 0, forwardClicks: 0, directClicks: 0 };
  //   });
  //   const newAnalyticsTime = Array.from({ length }, () => 0);
  //   setAnalyticsClicks(newAnalyticsClicks);
  //   setAnalyticsTime(newAnalyticsTime);
  // };

  // const sendAnalytics = (email: string) => {
  //   const analytics = {
  //     email: email,
  //     clicks: analytics_clicks,
  //     time: analytics_time,
  //     helpline_clicks: analytics_helpline_clicks,
  //     glossary_hover: analytics_glossary_hover,
  //   };
  //   console.log(analytics.email);
  //   axios.put("api/analytics", analytics).then((res) => {
  //     console.log(res.data);
  //   });
  // };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

{
  /* <div className="container-fluid">
        <div className="row">
          <div className="col-2 d-none d-lg-flex justify-content-center p-2">
            {/* <QuestionNavigation
              carouselRef={carouselRef}
              questions={questions}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              analytics_clicks={analytics_clicks}
              setAnalyticsClicks={setAnalyticsClicks}
            ></QuestionNavigation> */
}
//     <NavigationMenu
//       menuItems={questionMenu}
//       clickHandler={(e: { key: string }) => {}}
//       defaultOpenKeys={questionMenuDefaultOpenKeys}
//     />
//   </div>
//   <div className="col-sm-12 col-lg-8 d-flex justify-content-center flex-column h-100">
//     <QuestionView
//       carouselRef={carouselRef}
//       questions={questions}
//       sendAnalytics={sendAnalytics}
//       currentPage={currentPage}
//       setCurrentPage={setCurrentPage}
//       analytics_clicks={analytics_clicks}
//       setAnalyticsClicks={setAnalyticsClicks}
//       analytics_time={analytics_time}
//       setAnalyticsTime={setAnalyticsTime}
//       analytics_glossary_hover={analytics_glossary_hover}
//       setAnalyticsGlossaryHover={setAnalyticsGlossaryHover}
//     />
//   </div>
//   <div className={`col-2 d-none d-lg-flex justify-content-center p-2 `}>
//     <HelpNavigation
//       setAnalyticsHelplineClicks={setAnalyticsHelplineClicks}
//       analytics_helpline_clicks={analytics_helpline_clicks}
//     ></HelpNavigation>
//   </div>
// </div>
// </div> */}
