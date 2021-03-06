import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from 'react';
import Aos from 'aos';

const DifferenceSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 4000
    });
  }, []);
  return (
    <Container sx={{ py: 15 }}>
      <Box
        data-aos="fade-up"
        data-aos-duration="3000"
        sx={{ pb: 8 }}>
        <Typography
          sx={{
            fontStyle: "italic",
            fontSize: 21,
            color: "#46AADD",
            textAlign: "center",
          }}
          variant="body1"
          gutterBottom
        >
          Prepare your child for school readiness
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: 42,
            color: "#3B4757",
            textAlign: "center",
          }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Feel The Difference
        </Typography>
        <br />
        <Typography
          sx={{ color: "#777", textAlign: "center", fontSize: "14px" }}
          variant="body2"
          gutterBottom
        >
          What gives our website the quality you feel the moment you enter are
          the “pillars” of belief that support them. <br /> There are six core
          beliefs on which everything centers at our Website.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid
            data-aos="fade-right"
            data-aos-duration="3000"
            item xs={12} sm={12} md={3}>
            {/* box-1 */}

            <Box
              sx={{
                background: "#fff",
                w: "25%",
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "55px",
                  color: "#46AADD",
                  fontWeight: "bold",
                }}
              >
                1.
              </Typography>
              <Typography
                sx={{
                  color: "#3B4757",
                  fontWeight: "500",
                  fontSize: "18px",
                  py: 2,
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Experiential Learning
              </Typography>
              <Typography
                sx={{ color: "#777", textAlign: "center", fontSize: "14px" }}
                variant="body2"
                gutterBottom
              >
                We help children connect with their surroundings in new ways, so
                they discover what is meaningful to them in the moment and in
                the future.
              </Typography>
            </Box>
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-duration="3000"
            item xs={12} sm={12} md={3}>
            {/* box-2 */}

            <Box
              sx={{
                background: "#fff",
                w: "25%",
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "55px",
                  color: "#46AADD",
                  fontWeight: "bold",
                }}
              >
                2.
              </Typography>
              <Typography
                sx={{
                  color: "#3B4757",
                  fontWeight: "500",
                  fontSize: "18px",
                  py: 2,
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Community
              </Typography>
              <Typography
                sx={{ color: "#777", textAlign: "center", fontSize: "14px" }}
                variant="body2"
                gutterBottom
              >
                A child’s educational success in large part depends on families,
                educators, peers and relevant members of the community.
              </Typography>
            </Box>
          </Grid>
          <Grid
            data-aos="fade-up"
            data-aos-duration="3000"
            item xs={12} sm={12} md={3}>
            {/* box-3 */}

            <Box
              sx={{
                background: "#fff",
                w: "25%",
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "55px",
                  color: "#46AADD",
                  fontWeight: "bold",
                }}
              >
                3.
              </Typography>
              <Typography
                sx={{
                  color: "#3B4757",
                  fontWeight: "500",
                  fontSize: "18px",
                  py: 2,
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Collaboration
              </Typography>
              <Typography
                sx={{ color: "#777", textAlign: "center", fontSize: "14px" }}
                variant="body2"
                gutterBottom
              >
                Sharing new experiences and solving problems with others leads
                to a greater sense of connectedness.
              </Typography>
            </Box>
          </Grid>
          <Grid
            data-aos="fade-right"
            data-aos-duration="3000"
            item xs={12} sm={12} md={3}>
            {/* box-4 */}

            <Box
              sx={{
                background: "#fff",
                w: "25%",
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "55px",
                  color: "#46AADD",
                  fontWeight: "bold",
                }}
              >
                4.
              </Typography>
              <Typography
                sx={{
                  color: "#3B4757",
                  fontWeight: "500",
                  fontSize: "18px",
                  py: 2,
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Proven Models
              </Typography>
              <Typography
                sx={{ color: "#777", textAlign: "center", fontSize: "14px" }}
                variant="body2"
                gutterBottom
              >
                Several important learning models have been developed by
                educators around the world.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DifferenceSection;
