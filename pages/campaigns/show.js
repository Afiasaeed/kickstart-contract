import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import {Link} from "../../routes";

class CampaignShow extends Component {
  static async getInitialProps(props){
  //  props.query.address; //address of actual Campaign
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();
    console.log(summary);

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards(){
    const {
      minimumContribution,
      balance,
      requestCount,
      approversCount,
      manager
    }= this.props;
    const items = [{
      header:manager,
      meta:"address of manager",
      description: "manager created this campaign",
      style: { overflowWrap: "break-word"}
    },{
      header:minimumContribution,
      meta:"Minimum Contribution (wei)",
      description: "you must contribute at least this much way to be an approver",
      style: { overflowWrap: "break-word"}

    },
  {
    header:requestCount,
    meta:"Number of Requests",
    description: "request must be approved by approvers ",
    style: { overflowWrap: "break-word"}
  },{
    header:approversCount,
    meta:"number of approvers",
    description: "Number of people who have already donated",
    style: { overflowWrap: "break-word"}
  },
{
  header:web3.utils.fromWei(balance,"ether"),
  meta:"Campaign balance (in ether)",
  description: "money this campaign have",
  style: { overflowWrap: "break-word"}
}];
    return <Card.Group items = {items} />;
  }
  render() {
    return(
      <Layout>
       <h3>Campaign detail </h3>
       <Grid>
       <Grid.Row>
       <Grid.Column width={10}>

       {this.renderCards()}

              </Grid.Column>

             <Grid.Column width={6}>
       <ContributeForm address={this.props.address} />
         </Grid.Column>
         </Grid.Row>

          <Grid.Row>
          <Grid.Column>
         <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                <Button primary> View Requests </Button>
         </a>
         </Link>
         </Grid.Column>
         </Grid.Row>
         </Grid>
       </Layout>
     );
  }
}
export default CampaignShow;
