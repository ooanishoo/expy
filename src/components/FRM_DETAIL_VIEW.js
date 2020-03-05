import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

const location = "Melbourne, AU";
const description =
  "Labore quis laboris incididunt enim culpa nisi sunt dolor. Voluptate dolore nostrud cillum in labore sunt. Occaecat proident dolore magna tempor ex.Labore quis laboris incididunt enim culpa nisi sunt dolor. Voluptate dolore nostrud cillum in labore sunt. Occaecat proident dolore magna tempor ex.";

const FRM_DETAIL_VIEW = ({ entity = {} }) => {
  console.log(entity, "detail view");
  if (entity == null) {
    return (
      <Card shadow={0} style={{ width: "100%", margin: "auto" }}>
        <CardText>Please select an internhip to view details.</CardText>
      </Card>
    );
  }
  
  const { name, companyName} = entity;
  return (
    <React.Fragment>
      <Card shadow={0} style={{ width: "100%", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
          }}
        ></CardTitle>
        <CardText border>
          <h4 style={{ lineHeight: "0" }}>{name}</h4>
          <a
            style={{ style: "text-decoration:none" }}
            href="https://www.google.com/"
            target="_blank"
          >
            <b>{companyName}</b>
          </a>
          <p>{location}</p>
          <hr />
          {description}
        </CardText>

        {/* <CardText>
            <div><b>Company Representative</b></div>
            {companyRep}
          </CardText>
           */}
        <CardActions border>
          <Button colored>Read More</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    </React.Fragment>
  );
};

export default FRM_DETAIL_VIEW;
