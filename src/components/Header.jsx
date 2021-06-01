import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import techhack from "../icons/techhack.png";
import { Icon } from "@material-ui/core";

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{"Copyright © "}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	"@global": {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: "none",
		},
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
		width: "100vw",
		position: "stciky",
	},
	toolbar: {
		flexWrap: "wrap",
		position: "sticky",
		Width: "100vw",
		backgroundColor: "black",
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
		color: "white",
	},
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
}));

export default function Pricing() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position='sticky'
				color='default'
				elevation={0}
				className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Icon
						variant='h6'
						color='inherit'
						noWrap
						className={classes.toolbarTitle}>
						<img src={techhack} alt='dcsdv' />
					</Icon>

					<nav>
						<Link
							variant='button'
							color='textPrimary'
							href='#'
							className={classes.link}>
							HOME
						</Link>
						<Link
							variant='button'
							color='textPrimary'
							href='#'
							className={classes.link}>
							TRAININGS
						</Link>
						<Link
							variant='button'
							color='textPrimary'
							href='#'
							className={classes.link}>
							CONTACT US
						</Link>
						<Link
							variant='button'
							color='textPrimary'
							href='#'
							className={classes.link}>
							WEBINARS
						</Link>
					</nav>
				</Toolbar>
			</AppBar>
			{/* Hero unit */}

			{/* End footer */}
		</React.Fragment>
	);
}
