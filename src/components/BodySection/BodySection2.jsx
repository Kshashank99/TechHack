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
								What makes us stand out?
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
								We are 100% live and practical.
							</Typography>

							<Typography
								variant='body2'
								component='p'
								className={classes.bodyText}>
								TechHack provides Two assured Internship opportunities and over
								10 industry projects simultaneously with the regular live
								training. We have zero pre-recorded sessions and committed to
								the practical based approach. Throughout the course, you will
								involve in numerous real time projects of real start-ups and get
								global standard exposure. We will handhold you at each and every
								step with our 24/7 expert support. Weekly practical and
								assignments will be provided for better sanctity. Our mentors
								have an average experience of 3+ years and they have worked with
								top global firms such as Requestee, Lazyhackers and many more.
								<br />
								{'"a benevolent smile"'}
							</Typography>
							<Typography
								className={classes.bodyText}
								variant='body2'
								component='p'
								gutterBottom>
								Claim your two Free sessions right now!
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='large' className={classes.btn}>
								CLAIM 2 FREE DEMO CLASSES
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default BodySection1;
