import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// imagesの画像をimportする
import image from "../images/food_yaminabe.png";

const HomePage = () => (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h2" component="div" sx={{ mb: 4 }}>
            闇鍋クイズ
        </Typography>

        <img src={image} alt="闇鍋" style={{ width: "100%", maxWidth: "400px", margin: "auto", marginBottom: "20px" }} />

        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={4}>
                <Link to="/tutorial" style={{ textDecoration: "none" }}>
                    <Button fullWidth size="large" variant="contained" color="primary">
                        あそびかた
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12} md={4}>
                <Link to="/put" style={{ textDecoration: "none" }}>
                    <Button fullWidth size="large" variant="contained" color="warning">
                        材料を入れる
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12} md={4}>
                <Link to="/eat" style={{ textDecoration: "none" }}>
                    <Button fullWidth size="large" variant="contained" color="secondary">
                        鍋を食べる
                    </Button>
                </Link>
            </Grid>
        </Grid>
    </Container>
);

export default HomePage;
