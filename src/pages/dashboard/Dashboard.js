import { useContext } from "react";
import { Row, Col, Card } from "reactstrap";
import CompanyTable from "./CompanyTable";
import { ThemeColors } from "@src/utility/context/ThemeColors";
import Earnings from "@src/views/ui-elements/cards/analytics/Earnings";
import CardMedal from "@src/views/ui-elements/cards/advance/CardMedal";
import CardMeetup from "@src/views/ui-elements/cards/advance/CardMeetup";
import StatsCard from "@src/views/ui-elements/cards/statistics/StatsCard";
import GoalOverview from "@src/views/ui-elements/cards/analytics/GoalOverview";
import RevenueReport from "@src/views/ui-elements/cards/analytics/RevenueReport";
import OrdersBarChart from "@src/views/ui-elements/cards/statistics/OrdersBarChart";
import ProfitLineChart from "@src/views/ui-elements/cards/statistics/ProfitLineChart";
import CardTransactions from "@src/views/ui-elements/cards/advance/CardTransactions";
import CardBrowserStates from "@src/views/ui-elements/cards/advance/CardBrowserState";

import "@styles/react/libs/charts/apex-charts.scss";
import "@styles/base/pages/dashboard-ecommerce.scss";
import "./Dashboard.scss";
import { Link, Route } from "react-router-dom";
import Students from "./students/Students";
import Teachers from "./teachers/Teachers";
import Classes from "./classes/Classes";
const Dashboard = (props) => {
  const { location } = props;
  return (
    <div id="dashboard-ecommerce">
      <Card className="nav-header-top">
        <div className="d-flex align-items-center content-header">
          <Link to="/dashboard/classes"> <div className={`item ${location?.pathname?.includes("/dashboard/classes") ? 'active' : ""}`}>Lớp học</div></Link>
          <Link to="/dashboard/students"> <div className={`item ${location?.pathname?.includes("/dashboard/students") ? 'active' : ""}`}>Học viên</div></Link>
          <Link to="/dashboard/teachers"> <div className={`item ${location?.pathname?.includes("/dashboard/teachers") ? 'active' : ""}`}>Giảng viên</div></Link>
        </div>
      </Card>
      <Route path={"/dashboard/classes"} component={() => <Classes />} />
      <Route path={"/dashboard/students"} component={() => <Students />} />
      <Route path={"/dashboard/teachers"} component={() => <Teachers />} />
    </div>
  );
};

export default Dashboard;
