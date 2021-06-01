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
	},
	gridItem2: {
		minHeight: "50px",
	},
	heading: {
		fontFamily: "Montserrat, sans-serif",
		fontWeight: "bold",
	},
}));

const BodySection4 = () => {
	const classes = useStyles();

	return (
		<Container maxWidth='lg' className={classes.main}>
			<Grid container className={classes.gridContainer} spacing={5}>
				<Grid xs={12} lg={3} item classes={classes.gridItem}>
					<Card className={classes.root}>
						<CardContent style={{ backgroundColor: "#ffd351" }}>
							<Typography
								style={{ backgroundColor: "#ffd351" }}
								variant='h5'
								component='h2'>
								We offer you More
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid xs={12} lg={9} item>
					<Card className={classes.root}>
						<CardContent>
							<Typography
								variant='h5'
								component='h2'
								className={classes.heading}>
								WHAT MAKES US STAND OUT
							</Typography>

							<Typography variant='body2' component='p' gutterBottom>
								TechHack challenges you to find another platform providing the
								below benefits &similar prices and we promise to provide FULL
								access of our courses! We have best-in-class 100% live
								curriculum which is highly customisable. We offer the most
								affordable courses in market with tons of invaluble benefits
								such as
								<br />
								{'"a benevolent smile"'}
							</Typography>
							<Typography variant='body2' component='p' gutterBottom>
								"Claim your two Free sessions right now!"
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>

			<Grid container className={classes.gridContainer} spacing={2}>
				{/* <Grid item xs={0} lg={3}></Grid> */}
				<Grid item xs={12} lg={4} classes={classes.gridItem2}>
					<Card
						className={classes.gridItem2}
						style={{ backgroundColor: "#cecece" }}>
						<CardContent>
							<Typography
								variant='h5'
								component='h2'
								className={classes.heading}>
								100% Live curriculum
							</Typography>
							<Typography variant='body2' component='p' gutterBottom>
								We have zero pre-recorded sessions and absolutely focused on
								providing live training. Get answers to all the queries, Attend
								live practical and experience highly customised curriculum
								according to your learning skills.
								<br />
								{'"a benevolent smile"'}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} lg={4} classes={classes.gridItem2}>
					<Card
						className={classes.gridItem2}
						style={{ backgroundColor: "#cecece" }}>
						<CardContent>
							<Typography
								variant='h5'
								component='h2'
								className={classes.heading}>
								Assured Internships
							</Typography>
							<Typography variant='body2' component='p' gutterBottom>
								You shall be provided with two assured internships as soon as
								you join the course.The tenure of internship shall be the same
								as of the course. Get hands-on &real-time experience, work with
								reputed firms, nourish your skills and stand a chance to get a
								full-time job offer.
								<br />
								{'"a benevolent smile"'}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} lg={4} classes={classes.gridItem2}>
					<Card
						className={classes.gridItem2}
						style={{ backgroundColor: "#cecece" }}>
						<CardContent>
							<Typography
								variant='h5'
								component='h2'
								className={classes.heading}>
								Over 10 Industry projects
							</Typography>
							<Typography variant='body2' component='p' gutterBottom>
								THT has partnered with some of the fastest growing start-ups to
								provide real time projects. You shall be getting in total 10
								industrial projects. Partner with fellow students, work on
								projects, hands on tasks and duties. Exclusively for opening up
								the doors of career opportunities
								<br />
								{'"a benevolent smile"'}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} lg={4} classes={classes.gridItem2}>
					<Card
						className={classes.gridItem2}
						style={{ backgroundColor: "#cecece" }}>
						<CardContent>
							<Typography
								variant='h5'
								component='h2'
								className={classes.heading}>
								Learn & Earn Together
							</Typography>
							<Typography variant='body2' component='p' gutterBottom>
								Throughout each course, you shall be provided with freelance
								projects. Get compensated for utilising your skills, build up
								your freelancing portfolio and get honest recommendations from
								over 10 start-ups you work with. All in at ZERO cost.
								<br />
								{'"a benevolent smile"'}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default BodySection4;
