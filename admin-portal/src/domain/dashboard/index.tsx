import { RouteComponentProps, Router } from "@reach/router"
import React, { useState } from "react"
import PlusIcon from "../../components/fundamentals/icons/plus-icon"
import BodyCard from "../../components/organisms/body-card"
import TableViewHeader from "../../components/organisms/custom-table-header"
import Medusa from "./../../services/api"
import { getErrorMessage } from "./../../utils/error-messages"
import useNotification from "./../../hooks/use-notification"
import { CanvasJSChart } from 'canvasjs-react-charts'

const VIEWS = ["dashboard"]
interface IChartAxisData {
  label: string,
  y: number
}

class ChartAxisData implements IChartAxisData {
  label: string = "";
  y: number = 0;
}


const DashboardIndex: React.FC<RouteComponentProps> = () => {

  const notification = useNotification()

  const [salesDetails, setSalesDetails] = React.useState([])

  React.useEffect(() => {
    getAllSalesDetails()
  }, [])

  const getAllSalesDetails = async () => {

    try {
      let orderDetails = await Medusa.dashboard.ordersWithStore("week");

      let orderData = orderDetails.data;
      console.log(JSON.stringify(orderData));

      let salesMap: ChartAxisData[] = [];

      Object.entries(orderData).map((key, value) => {

        console.log(key[0], key[1]);

        let chartData = new ChartAxisData();
        chartData.label = key[0].toString();
        let amount = key[1];
        chartData.y = parseInt(amount as string)
        salesMap.push(chartData);
      })
      console.log(salesMap);

      setSalesDetails(salesMap);

    } catch (error) {
      console.log(error);

      notification("Error", "(error)", "error")
    }

  }


  const actionables = [
    {
      label: "Refresh",
      onClick: () => { },
      icon: <PlusIcon size={20} />,
    },
  ]

  const options = {
    animationEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title: {
      text: "Store wise revenue "
    },
    axisY: {
      title: "Revenue",
      // labelFormatter: this.addSymbols,
      scaleBreaks: {
        autoCalculate: true
      }
    },
    axisX: {
      title: "Store",
      labelAngle: 0
    },
    data: [{
      type: "column",
      dataPoints: salesDetails
    }]
  }

  return (
    <div className="h-full flex flex-col">
      <div className="w-full flex flex-col grow">
        <BodyCard
          forceDropdown={false}
          // customActionable={CurrentAction()}
          customHeader={
            <TableViewHeader
              views={VIEWS}
            />
          }
        >
          <CanvasJSChart options={options} />
        </BodyCard>
      </div>

    </div>
  )
}

const Dashboard = () => {
  return (
    <Router>
      <DashboardIndex path="/*" />
    </Router>
  )
}

export default Dashboard