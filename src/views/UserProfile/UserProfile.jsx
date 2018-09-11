import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  //FormGroup,
  //ControlLabel,
  //FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
//import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

//import avatar from "assets/img/faces/face-3.jpg";

class RegisterStudent extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Admission Form"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        
                        {
                          label: "Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Name",
                        },
                        {
                          label: "Stream Name ",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Stream",
                        },
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Branch",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Branch",
                          
                        },
                        {
                          label: "Admission Quota",
                          type: "text",
                          bsClass: "form-control",
                          
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6","col-md-6"]}
                      proprieties={[
                        {
                          label: "Admmission Type",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Type",
                        },
                        {
                          label: "Unique ID",
                          type: "string",
                          bsClass: "form-control",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Semester Name",
                          type: "integer",
                          bsClass: "form-control",
                          placeholder: "Sem",
                          
                        },
                        {
                          label: "Entrance Exam Rank(CET/COMEDK)",
                          type: "integer",
                          bsClass: "form-control",
                          placeholder: "Rank",
                        }
                      ]}
                    />
                  </form>
                }
              />
            </Col>
            
          </Row>
        </Grid>>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Student Miscellaneous Details"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-4", "col-md-4","col-md-4"]}
                      proprieties={[
                        
                        {
                          label: "First Name",
                          type: "text",
                          bsClass: "form-control",
                        },
                        {
                          label: "Current Address ",
                          type: "string",
                          bsClass: "form-control",
                        
                        },
                        {
                          label: "Place of Birth",
                          type: "string",
                          bsClass: "form-control",
                  
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4","col-md-4"]}
                      proprieties={[
                        {
                          label: "Middle Name",
                          type: "text",
                          bsClass: "form-control",

                        },
                        {
                          label: "Current City",
                          type: "text",
                          bsClass: "form-control",
                          
                        },
                        {
                          label: "State of Birth",
                          type: "text",
                          bsClass: "form-control",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4","col-md-4","col-md-4"]}
                      proprieties={[
                        {
                          label: "Last Name/Surname/Initials",
                          type: "text",
                          bsClass: "form-control",
                        
                        },
                        {
                          label: "Current State",
                          type: "text",
                          bsClass: "form-control",
                        
                        },
                        {
                          label: "Country of Birth",
                          type: "text",
                          bsClass: "form-control",
                        
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4","col-md-4"]}
                      proprieties={[
                        {
                          label: "Gender",
                          type: "text",
                          bsClass: "form-control",        
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                         
                        },
                        {
                          label: "Disability/Handicap",
                          type: "text",
                          bsClass: "form-control",
                        
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4","col-md-4"]}
                      proprieties={[
                        {
                          label: "Gender",
                          type: "text",
                          bsClass: "form-control",        
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                         
                        },
                        {
                          label: "Disability/Handicap",
                          type: "text",
                          bsClass: "form-control",
                        
                        }
                      ]}
                    />

                    
                  </form>
                }
              />
            </Col>
            
          </Row>
        </Grid>>
        <Button bsStyle="info" pullRight fill type="submit">
                      Save
                    </Button>
                    <div className="clearfix" />
      </div>
    );
  }
}

export default RegisterStudent;
