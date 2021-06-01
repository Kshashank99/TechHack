import { Container, Typography, Link, Box, Grid } from "@material-ui/core";
import { CopyrightOutlined } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up("sm")]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	},
}));
const footers = [
	{
		title: "PAGES",
		description: ["Home", "Contact Us", "Trainings", "Webinars"],
	},
	{
		title: "CONNECT",
		description: ["Schedule a Free Counselling"],
	},
	{
		title: "COURSES",
		description: [
			"TechHack's Certified Ethical Hacker",
			"Web Application Penetration Testing",
			"Malware Analysis & Reverse Engineering",
			"Android Penetration Testing",
		],
	},
];

const Footer = () => {
	const classes = useStyles();
	return (
		<Container maxWidth='md' component='footer' className={classes.footer}>
			<Grid container spacing={4} justify='space-evenly'>
				{footers.map((footer) => (
					<Grid item xs={6} sm={3} key={footer.title}>
						<Typography variant='h6' color='textPrimary' gutterBottom>
							{footer.title}
						</Typography>
						<ul>
							{footer.description.map((item) => (
								<li key={item}>
									<Link href='#' variant='subtitle1' color='textSecondary'>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</Grid>
				))}
			</Grid>
			<Box mt={5}>
				<CopyrightOutlined />
			</Box>
		</Container>
	);
};

export default Footer;
