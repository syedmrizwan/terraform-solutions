import React from "react";
import { Redirect, useParams } from "react-router-dom";

import Credentials from "./credentials";
import LaunchController from "./launch-controller";
import LaunchTransitAWS from "./launch_transit_aws";
import LaunchTransitAzure from "./launch_transit_azure";
import LaunchEC2 from "./launch_ec2";
import BuiltTransit from "./built-transit";
import ImportKeyPair from "./import-key-pair";
import { ROUTES } from "utils/constants";

export default function Steps() {
  const { stepNo } = useParams() as { stepNo: string };
  switch (stepNo) {
    case "1":
      return <Credentials />;
    case "2":
      return <LaunchController />;
    case "3":
      return <LaunchTransitAWS />;
    case "4":
      return <LaunchEC2 />;
    case "5":
      return <ImportKeyPair />;
    case "6":
      return <LaunchTransitAzure />;
    case "7":
      return <BuiltTransit />;
    default:
      return <Redirect to={ROUTES.configuration} />;
  }
}
