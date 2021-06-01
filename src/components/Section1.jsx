import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Grid,
	Typography,
} from "@material-ui/core";
import React from "react";
import background from "./video/background.mp4";
import { makeStyles } from "@material-ui/core/styles";
import TypeWriter from "react-typewriter";
const useStyles = makeStyles((theme) => ({
	"@global": {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: "none",
		},
	},
	box1: {
		minHeight: "110vh",
	},

	container: {
		zIndex: 1,
		display: "flex",
		flexDirection: "column",
		paddingTop: "20vh",
		paddingLeft: "20vw",
		paddingRight: "20vw",
	},
	video: {
		position: "absolute",
		zIndex: -1,
		maxWidth: "100vw",
		left: "0%",
		top: "0%",
		right: "0%",
		bottom: "0%",
		minHeight: "110vh",
		objectFit: "cover",
	},
	text: {
		color: "white",
		// padding: "0 3%",
	},
	heading: {
		fontSize: "64px",
	},
	btn: {
		backgroundColor: "Transparent",
		backgroundRepeat: "no-repeat",
		border: "none",
		cursor: "pointer",
		// overflow: "hidden",
		padding: "20px 40px",
		outline: "none",
		border: "5px solid white",
		color: "white",
		marginTop: "50px",
		fontSize: "22px",
		"&:hover": {
			backgroundColor: "blue",
			boxShadow: "none",
		},
		"&:active": {
			// boxShadow: "none",
			backgroundColor: "#3c52b2",
		},
	},
	btnText: {
		fontSize: "22px",
	},
}));
function Section1() {
	const classes = useStyles();
	return (
		<Container className={classes.box1}>
			<video className={classes.video} autoPlay loop muted>
				<source src={background} type='video/mp4' />
			</video>

			<Grid container spacing={2} className={classes.container}>
				<Grid item xs={12}>
					<Typography
						variant='h1'
						align='center'
						className={`${classes.text} ${classes.heading}`}>
						<span style={{ fontWeight: 700 }}>TechHack</span> Technologies
					</Typography>
				</Grid>
				<Grid item xs={12} align='center'>
					<Typography variant='h5' className={classes.text}>
						<TypeWriter typing={0.8}>
							"The place where you hack your future"
						</TypeWriter>
					</Typography>
				</Grid>
				<Grid item xs={12} align='center'>
					<Typography variant='body-2' className={classes.text}>
						India’s first hands on integrated platform to learn cyber security.
						Get assured Internships & real time projects, 100% live training and
						zero pre-recorded sessions. Begin your cyber security career with
						the most affordable training in the global market.
					</Typography>
				</Grid>
				<Grid item xs={12} align='center'>
					<Button className={classes.btn}>Explore Courses</Button>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Section1;
