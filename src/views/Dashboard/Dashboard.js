import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import savingsAccount from "assets/img/cuentas/cuenta-ahorros.png";
import currentAccount from "assets/img/cuentas/cuenta-corriente.png";
import visa from "assets/img/cuentas/visa.png";
import master from "assets/img/cuentas/mastercard.png";
import cdt from "assets/img/cuentas/cdt.png";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader>
              <CardIcon>
              <h3 className={classes.cardTitle}>Cuenta Ahorros</h3>
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <a href="#">
                  Ver todos
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader>
              <CardIcon>
                <h3 className={classes.cardTitle}>Cuenta Corriente</h3>
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                Ver todos
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader>
              <CardIcon>
              <h3 className={classes.cardTitle}>Tarjeta de Crédito</h3>
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                Ver todos
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader>
              <CardIcon>
              <h3 className={classes.cardTitle}>CDT</h3>
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                Ver todos
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader>
              <CardAvatar profile>
                <a href="#">
                  <img src={visa} alt="..." />
                </a>
              </CardAvatar>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Credit Card</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                   Nro.
                </span>{" "}
                4544769920667610
              </p>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  Pago Total
                </span>{" "}
                126012.54
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
              <span className={classes.successText}>
              Saldo en Mora
                </span>{" "}
                  0.38
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader>
              <CardAvatar profile>
                  <a href="#">
                    <img src={master} alt="..." />
                  </a>
              </CardAvatar>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Credit Card</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                   Nro.
                </span>{" "}
                5201897302970640
              </p>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  Pago Total
                </span>{" "}
                126012.54
              </p>
            </CardBody>
            <CardFooter chart>
            <div className={classes.stats}>
              <span className={classes.successText}>
              Saldo en Mora
                </span>{" "}
                  5000
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader>
            <CardAvatar profile>
                  <a href="#">
                    <img src={savingsAccount} alt="..." />
                  </a>
              </CardAvatar>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Current Account</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                   Nro.
                </span>{" "}
                110080000680
              </p>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  Saldo Disponible
                </span>{" "}
                240504.96
              </p>
            </CardBody>
            <CardFooter chart>
            <div className={classes.stats}>
              <span className={classes.successText}>
              Saldo Actual
                </span>{" "}
                  240504.96
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
