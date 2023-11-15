import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const HomePage = () => (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h1" component="div" sx={{ mb: 4 }}>
            闇鍋クイズ
        </Typography>
        <Link to="/put" style={{ textDecoration: "none" }}>
            <Button size="large" variant="contained" color="primary" >
                材料を入れる
            </Button>
        </Link>
        <Link to="/eat" style={{ textDecoration: "none" }}>
            <Button size="large" variant="contained" color="secondary">
                鍋を食べる
            </Button>
        </Link>
    </Container>
);

export default HomePage;
