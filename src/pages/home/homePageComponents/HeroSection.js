import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { styled, keyframes } from "@mui/system";
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUsers, faFutbol } from "@fortawesome/free-solid-svg-icons";
// import Fade from "@mui/material/Fade";

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const colors = {
  primary: "#5C5AA7",
  secondary: "#FFA500",
  white: "#FFFFFF",
  gray: "#A6A6A6",
};

// const CtaSectionRoot = styled("section")(({ theme }) => ({
//   backgroundColor: "grey",
//   color: colors.white,
//   padding: theme.spacing(6),
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const CtaButton = styled(Button)(({ theme }) => ({
//   backgroundColor: colors.secondary,
//   color: colors.white,
//   borderRadius: "50px",
//   padding: theme.spacing(2, 4),
//   textTransform: "uppercase",
//   "&:hover": {
//     backgroundColor: colors.gray,
//     color: colors.white,
//   },
// }));

// const CtaIcon = styled(FontAwesomeIcon)(({ theme }) => ({
//   fontSize: "3.5rem",
//   marginRight: theme.spacing(2),
//   color: colors.white,
// }));

const HeroWrapper = styled("section")({
  backgroundColor: "#5D5FEF",
  color: "#FFFFFF",
  padding: "80px 0 60px",
  textAlign: "center",
});

const TitleWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

// const TitleText = styled(Typography)({
//   fontWeight: "bold",
//   fontSize: "4rem",
//   lineHeight: "1.2",
//   textTransform: "uppercase",
//   marginBottom: "1rem",
// });

// const SubtitleText = styled(Typography)({
//   fontSize: "1.5rem",
//   lineHeight: "1.5",
// });

const SignUpButton = styled(Button)({
  backgroundColor: "#FFFFFF",
  color: "#5D5FEF",
  borderRadius: "30px",
  padding: "10px 30px",
  margin: "10px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
});

const LoginButton = styled(Button)({
  backgroundColor: "#FFFFFF",
  color: "#5D5FEF",
  borderRadius: "30px",
  padding: "10px 30px",
  margin: "10px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
});

const AnimatedTitle = styled(Typography)({
  animation: `${slideIn} 1s ease-out`,
});

const AnimatedSubtitle = styled(Typography)({
  animation: `${slideIn} 1.5s ease-out`,
});

const AnimatedButtons = styled(Box)({
  animation: `${slideIn} 2s ease-out`,
});

// const CtaSection = () => {
//   const navigate = useNavigate();

//   return (
//     <CtaSectionRoot>
//       <Fade in={true} timeout={1000}>
//         <Typography variant="h2" align="center" sx={{ fontSize: "3.5rem" }}>
//           <CtaIcon icon={faUsers} />
//           Create teams and organize matches with ease
//         </Typography>
//       </Fade>
//       <Box sx={{ mt: 4 }}>
//         <Fade in={true} timeout={1500}>
//           <CtaButton variant="contained" onClick={() => navigate("/signup")}>
//             <CtaIcon icon={faUsers} />
//             Sign Up
//           </CtaButton>
//         </Fade>
//         <Fade in={true} timeout={2000}>
//           <CtaButton variant="outlined" onClick={() => navigate("/login")}>
//             <CtaIcon icon={faFutbol} />
//             Login
//           </CtaButton>
//         </Fade>
//       </Box>
//     </CtaSectionRoot>
//   );
// };

const HeroSection = () => {
  return (
    <HeroWrapper>
      <TitleWrapper>
        <AnimatedTitle variant="h1" sx={{ fontSize: "4rem" }}>
          Welcome to Coaches Code
        </AnimatedTitle>
        <AnimatedSubtitle variant="h2" sx={{ fontSize: "2rem" }}>
          Join now to connect with your friends and schedule games
        </AnimatedSubtitle>
        <AnimatedButtons sx={{ mt: 4 }}>
          <SignUpButton variant="contained">Sign Up</SignUpButton>
          <LoginButton variant="outlined">Login</LoginButton>
        </AnimatedButtons>
      </TitleWrapper>
    </HeroWrapper>
  );
};

export default HeroSection;
