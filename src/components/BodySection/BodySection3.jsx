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
		backgroundColor: "#ffae00",
		minWidth: "100vw",
	},
	bodyText: {
		fontFamily: "Montserrat, sans-serif",
		marginTop: "50px",
	},
	gridContainer: {
		padding: "50px 50px",
		backgroundColor: "##ffae00",
	},
	gridItem: {
		backgroundColor: "#ffae00",
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
		backgroundColor: "#ffae00",
	},
}));

const BodySection1 = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<Container>
				<Grid container className={classes.gridContainer} spacing={5}>
					<Grid xs={12} lg={4} item classes={classes.gridItem}>
						<Card className={classes.cardLeft}>
							<CardContent style={{ backgroundColor: "inherit" }}>
								<Typography
									className={classes.bodyText}
									variant='h5'
									component='h2'>
									WE GO LIVE !
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid xs={12} lg={8} item>
						<Card className={classes.cardRight}>
							<CardContent style={{ backgroundColor: "inherit" }}>
								<Typography
									variant='h4'
									component='h2'
									className={classes.bodyText}
									style={{ fontWeight: "bold" }}>
									WE HAVE WEBINARS COMING UP FOR YOU
								</Typography>

								<Typography
									variant='body2'
									component='p'
									className={classes.bodyText}>
									THIS WEBINAR WILL COVER THE BASICS OF GETTING STARTED IN CYBER
									SECURITY AND GETTING TO THE LATER STAGES FROM A NEWBIE TO A
									COMPLETE PROFESSIONAL A STEP-BY-STEP PROCESS WEBINAR WILL BE
									CARRIED OUT TO GUIDE YOU THROUGHOUT YOU CAREER.
									<br />
									{'"a benevolent smile"'}
								</Typography>
								<Typography
									className={classes.bodyText}
									variant='body2'
									component='p'
									gutterBottom>
									Coming Soon
								</Typography>
							</CardContent>
							<CardActions>
								<Button size='large' className={classes.btn}>
									REGISTER
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default BodySection1;
