import { ButtonBase, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { api } from "../../../../../Hooks/Api";
import { NavLink, useParams } from "react-router-dom";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const DetailPageTeacher = () => {
  const { id } = useParams();
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch(`${api}/schools/${id}`)
      .then((res) => res.json())
      .then((data) => setTeachers(data?.data?.data.teachers));
  }, [id]);
  return (
    <div>
      <Grid container spacing={2}>
        {teachers.map((single) => (
          <Grid sx={{ py: 3 }} key={single._id} item xs={12} sm={12} md={6}>
            <Paper
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                // boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)",
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <NavLink to={`/details/${single._id}`}>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img alt="complex" src={single.teacherPhoto} />
                    </ButtonBase>
                  </NavLink>
                </Grid>
                <Grid item xs={6} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                   

                      <Typography
                        sx={{ mt: { xs: 1 } }}
                        variant="body2"
                        gutterBottom
                      >
                        {single.teacherName}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {" "}
                        {single.designation}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <NavLink
                        to={`/teacherDetails/${single._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <ButtonBase
                          sx={{
                            color: "#fff",
                            flexBasis: "initial",
                            minHeight: "30px",
                            fontFamily: "Sans-serif",
                            fontSize: "12px",
                            textTransform: "capitalize",
                            letterSpacing: "0px",
                            backgroundColor: "#01479b",
                            borderStyle: "solid",
                            borderWidth: "1px 1px 1px 1px",
                            borderColor: "#01479b",
                            paddingTop: 0,
                            paddingBottom: 0,
                            border: "none",
                            padding: "6px 12px",
                            display: "inlineBlock",
                            mb: { xs: 2 },
                            borderRadius: "5px",
                            fill: "#FFFFFF",
                            textAlign: "center",
                            fontWeight: 400,
                            whiteSpace: "nowrap",
                            userSelect: "none",
                            width: "auto",

                            overflow: "visible",
                            "&:hover": {
                              backgroundColor: "black",
                            },
                          }}
                        >
                          Details
                        </ButtonBase>
                      </NavLink>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DetailPageTeacher;
