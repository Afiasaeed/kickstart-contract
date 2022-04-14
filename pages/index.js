import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitialProps(){       //static defines class function
    const campaigns= await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }
  renderCampaigns(){
    const items= this.props.campaigns.map((address) => {
      return{
        header: address,
        description:(<Link route={ `/campaigns/${address}`}>
        <a>View Campaign</a>
         </Link>),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
      return (
        <Layout
        style={{
        backgroundColor: 'blue'
      }}>
        <div>
          <h3>Open Campaigns</h3>
<Link route="/campaigns/new">
<a>
          <Button floated="right"
          content='Create campaign'
          icon='add circle'
          primary //expands it to be equal and it add blue color to the button
          labelPosition='right'
          />
          </a>
          </Link>


          {this.renderCampaigns()}
        </div>
        </Layout>
      );
    }
  }

  export default CampaignIndex;
