import React, { Component } from "react";
import Board from "react-trello";
import { available } from "../data/applications";
import { applied } from "../data/applications";

const styles = {
  bucketStyles: { backgroundColor: "white" }
};

// const available = [
//   {
//     id: "1",
//     title: "Dorian Gray",
//     description:
//       "3289 \nAccounting \nMelbourne University \nAdvanced Accounting Firm",
//     draggable: false
//   },
//   {
//     id: "2",
//     title: "Titus Groan",
//     description: "61129 \nInformation Technology \nRMIT \nPitchers Partners",
//     draggable: false
//   }
// ];
export default class FRM_PROCESS_VIEW extends Component {
  render() {
    console.log(available);
    console.log(applied);

    const data = {
      lanes: [
        {
          id: "availalbe",
          title: "Available",
          label: "2",
          //cards: {available}
          cards: [
            {
              id: "1",
              title: "Dorian Gray",
              description:
                "3289 \nAccounting \nMelbourne University \nAdvanced Accounting Firm",
              draggable: false
            },
            {
              id: "2",
              title: "Titus Groan",
              description:
                "61129 \nInformation Technology \nRMIT \nPitchers Partners",
              draggable: false
            },
            {
              id: "4",
              title: "Bertie Wooster",
              description:
                "61129 \nInformation Technology \nRMIT \nPitchers Partners",
              draggable: false
            },
            {
              id: "5",
              title: "Will Ladislaw",
              description:
                "34342 \nEngineering \nDeakin University \nPro Tech Engineering",
              draggable: false
            },
          ]
        },
        {
          id: "applied",
          title: "Applied",
          label: "0/0",
          //   cards: {applied}
          cards: [
            {
              id: "1",
              title: "Matt Helm",
              description:
                "34342 \nMarketing \nDeakin University \nAmazon Australia",
              draggable: false
            },
            {
              id: "2",
              title: "Redrick Hudson",
              description:
                "61129 \nInformation Technology \nRMIT \nPitchers Partners",
              draggable: false
            }
          ]
        },
        {
          id: "shortlisted",
          title: "Shortlisted",
          label: "0/0",
          cards: []
        },
        {
          id: "interview",
          title: "Interview",
          label: "0/0",
          cards: [
            {
              id: "4",
              title: "Winston Smith",
              description:
                "61129 \nInformation Technology \nRMIT \nPitchers Partners",
              draggable: false
            }
          ]
        },
        {
          id: "placed",
          title: "Placed",
          label: "0/0",
          cards: [
            {
              id: "1",
              title: "Dorian Gray",
              description:
                "3289 \nMarketing \nCQUniversity \nIBM",
              draggable: false
            },
            {
              id: "2",
              title: "Titus Groan",
              description:
                "61129 \nInformation Technology \nRMIT \nPitchers Partners",
              draggable: false
            },
            {
              id: "3",
              title: "Emma Woodhouse",
              description:
                "34342 \nAccounting \nDeakin University \nAmazon Australia",
              draggable: false
            },
            {
              id: "4",
              title: "Winston Smith",
              description:
                "61129 \nInformation Technology \nRMIT \nPitchers Partners",
              draggable: false
            },
            {
              id: "5",
              title: "Thmoas Bigger",
              description:
                "34342 \nEngineering \nDeakin University \nAmazon Australia",
              draggable: false
            },
          ]
        },
        {
          id: "inprogress",
          title: "In Progress",
          label: "0/0",
          cards: []
        },
        {
          id: "completed",
          title: "Completed",
          label: "0/0",
          cards: [
            {
              id: "3",
              title: "Emma Woodhouse",
              description:
                "34342 \nAccounting \nDeakin University \nAmazon Australia",
              draggable: false
            },
            {
              id: "4",
              title: "Bertie Wooster",
              description:
                "61129 \nInformation Technology \nRMIT \nPitchers Partners",
              draggable: false
            },
            {
              id: "5",
              title: "Will Ladislaw",
              description:
                "34342 \nEngineering \nDeakin University \nPro Tech Engineering",
              draggable: false
            },
          ]
        }
      ]
    };
    return (
      <div>
        <Board
          data={data}
          style={styles.bucketStyles} 
          //   laneStyle={{
          //     style: styles.bucketStyles
          //   }}
        />
      </div>
    );
  }
}
