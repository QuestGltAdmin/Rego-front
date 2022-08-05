import { styled } from '@stitches/react';
import { mauve, blackA, indigo, green, red } from '@radix-ui/colors';

export const Box = styled('div', {
	boxShadow: `0 2px 10px ${blackA.blackA4}`,
	backgroundColor:"white",
});

export const Flex = styled('div', {
	display: 'flex',
	backgroundColor:"white",
	// boxShadow: `0 2px 10px ${blackA.blackA4}`
});

export const Text = styled('div', {
	marginBottom: 20,
	color: mauve.mauve11,
	fontSize: 15,
	lineHeight: 1.5,
});



export const Fieldset = styled('fieldset', {
	all: 'unset',
	marginBottom: 15,
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
});

export const Label = styled('label', {
	fontSize: 13,
	lineHeight: 1,
	marginBottom: 10,
	color: indigo.indigo12,
	display: 'block',
});

export const Input = styled('input', {
	all: 'unset',
	flex: '1 0 auto',
	borderRadius: 4,
	padding: '0 10px',
	fontSize: 15,
	lineHeight: 1,
	color: indigo.indigo11,
	boxShadow: `0 0 0 1px ${indigo.indigo7}`,
	height: 35,
	'&:focus': { boxShadow: `0 0 0 2px ${indigo.indigo8}` },
});

export const Button = styled('button', {
	all: 'unset',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: 4,
	padding: '0 15px',
	fontSize: 15,
	lineHeight: 1,
	fontWeight: 500,
	height: 35,
	cursor:"pointer",

	variants: {
		variant: {
			indigo: {
				backgroundColor: indigo.indigo11,
				color: 'white',
				boxShadow: `0 2px 10px ${blackA.blackA7}`,
				'&:hover': { backgroundColor: mauve.mauve3, color:indigo.indigo10, borderColor:indigo.indigo11 },
				'&:focus': { boxShadow: `0 0 0 2px ${indigo.indigo8}` },
			},
			green: {
				backgroundColor: green.green4,
				color: green.green11,
				'&:hover': { backgroundColor: green.green5 },
				'&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
			},
			red:{
				backgroundColor:red.red4,
				color:red.red11,
				'&:hover': { backgroundColor: red.red5 },
				'&:focus': { boxShadow: `0 0 0 2px ${red.red7}` },
			}
		},
	},

	defaultVariants: {
		variant: 'indigo',
	},
});


// Headings
export const Heading1 = styled('h1', {
	marginBottom: 20,
	color: indigo.indigo11,
	fontSize: 32,
	lineHeight: 2,
	fontWeight: "bolder"
});
export const Heading2 = styled('h2', {
	marginBottom: 20,
	color: indigo.indigo11,
	fontSize: 26,
	lineHeight: 1.5,
	fontWeight: "bold"
});
export const Heading3 = styled('h3', {
	marginBottom: 20,
	color: indigo.indigo11,
	fontSize: 22,
	lineHeight: 1,
	fontWeight: "normal"
});
export const Heading4 = styled('h4', {
	marginBottom: 20,
	color: indigo.indigo11,
	fontSize: 18,
	lineHeight: 1,
	fontWeight: "normal"
});