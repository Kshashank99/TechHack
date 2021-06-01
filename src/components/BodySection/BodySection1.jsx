import {
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Grid,
	Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	main: {
		// backgroundColor: "red",
		// minHeight: "100vh",
	},
	bodyText: {
		fontFamily: "Montserrat, sans-serif",
		marginTop: "50px",
	},
	gridContainer: {
		padding: "50px 50px",
	},
	gridItem: {
		backgroundColor: "yelow",
	},
	btn: {
		backgroundColor: "black",
		color: "white",
		fontFamily: "Montserrat, sans-serif",
	},
	cardLeft: {
		backgroundColor: "#ffd351",
	},
	cardRight: {
		paddingTop: "5%",
	},
}));

const BodySection1 = () => {
	const classes = useStyles();

	return (
		<Container maxWidth='lg' className={classes.main}>
			<Grid container className={classes.gridContainer} spacing={5}>
				<Grid xs={12} lg={4} item classes={classes.gridItem}>
					<Card className={classes.cardLeft}>
						<CardContent>
							<Typography
								className={classes.bodyText}
								variant='h5'
								component='h2'>
								Are you ready to experience the best training in Cyber security?
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid xs={12} lg={8} item>
					<Card className={classes.cardRight}>
						<CardContent>
							<Typography
								variant='h4'
								component='h2'
								className={classes.bodyText}
								style={{ fontWeight: "bold" }}>
								Learn & Earn Together with THT
							</Typography>

							<Typography
								variant='body2'
								component='p'
								className={classes.bodyText}>
								TechHack is the only training firm in India to provide regular
								live training sessions, assured internships and over 10 industry
								projects. We have trained over 800 students in the field of
								cyber security and our students have been recognised by the
								government of India. Our major objective is to create a one stop
								solution for learning Cyber security from scratch. We offer
								courses right from extreme beginner level up-to super advanced.
								Each training program is packed with tons of Internship and
								freelancing opportunities.
								<br />
								{'"a benevolent smile"'}
							</Typography>
							<Typography
								className={classes.bodyText}
								variant='body2'
								component='p'
								gutterBottom>
								“The most affordable and reliable Internship oriented courses”
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								size='large'
								style={{ float: "center" }}
								className={classes.btn}>
								GO TO LIVE TRAININGS
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default BodySection1;
