import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Card, Container, Row } from "react-bootstrap";
import { getListProjects } from "../actions/projectActions";

const ProjectLists = () => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projectLists);

  const { success, loading, projects } = projectList;

  console.log(projects);

  useEffect(() => {
    dispatch(getListProjects());
  }, [dispatch]);

  return (
    <div>
      <h1>ProjectLists</h1>
      <hr />
      <Container>
        <Row>
          {projects.map((project) => (
            <Col xs={12} md={6} lg={4} key={project.id}>
              <Card style={{ width: "18rem" }} className="m-3 pd-2">
                <Card.Img
                  variant="top"
                  height="150px"
                  src={project.thumbnail}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>
                    <b>({project.category})</b>
                  </Card.Text>
                  <hr />
                  <span>
                    <a
                      className="btn btn-info m-2 pd-2"
                      href={project.demo}
                      target="_blank"
                    >
                      Demo
                    </a>

                    <Link
                      style={{
                        textDecoration: "none",
                        marginLeft: "2px",
                        marginRight: "2px",
                      }}
                      className="m-2 pd-2 btn btn-success"
                      to={"/detail-project/" + project.id}
                    >
                      View
                    </Link>
                  </span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectLists;
