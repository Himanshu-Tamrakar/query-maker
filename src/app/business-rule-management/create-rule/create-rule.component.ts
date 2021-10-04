import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-rule',
  templateUrl: './create-rule.component.html',
  styleUrls: ['./create-rule.component.scss'],
})
export class CreateRuleComponent implements OnInit {
  types = {
    string: ['==', 'contains', '<', '>'],
    number: ['=='],
    date: ['<'],
    category: [],
    float: [],
    integer: [],
    boolean: [],
  };
  query: any = {
    type: 'CONDITION',
    operator: 'OR',
    statements: [
      {
        type: 'EXPRESSION',
        operator: 'contains',
        lOperand: {
          displayName: 'user.firstName',
          type: 'string',
          subType: '',
          value: '',
        },
        rOperand: {
          displayName: 'Himanshu',
          type: 'string',
          subType: '',
          value: '',
        },
      },
    ],
  };
  // query: any = {
  //   type: 'CONDITION',
  //   operator: 'OR',
  //   statements: [
  //     {
  //       type: 'EXPRESSION',
  //       operator: '',
  //       lOperand: {
  //         displayName: '',
  //         type: '',
  //         subType: '',
  //         value: '',
  //       },
  //       rOperand: {
  //         displayName: '',
  //         type: '',
  //         subType: '',
  //         value: '',
  //       },
  //     },
  //     {
  //       type: 'CONDITION',
  //       operator: 'OR',
  //       statements: [],
  //     },
  //     {
  //       type: 'EXPRESSION',
  //       operator: '',
  //       lOperand: {
  //         displayName: '',
  //         type: '',
  //         subType: '',
  //         value: '',
  //       },
  //       rOperand: {
  //         displayName: '',
  //         type: '',
  //         subType: '',
  //         value: '',
  //       },
  //     },
  //     {
  //       type: 'CONDITION',
  //       operator: 'OR',
  //       statements: [
  //         {
  //           type: 'EXPRESSION',
  //           operator: '',
  //           lOperand: {
  //             displayName: '',
  //             type: '',
  //             subType: '',
  //             value: '',
  //           },
  //           rOperand: {
  //             displayName: '',
  //             type: '',
  //             subType: '',
  //             value: '',
  //           },
  //         },
  //         {
  //           type: 'CONDITION',
  //           operator: 'OR',
  //           statements: [
  //             {
  //               type: 'EXPRESSION',
  //               operator: '',
  //               lOperand: {
  //                 displayName: '',
  //                 type: '',
  //                 subType: '',
  //                 value: '',
  //               },
  //               rOperand: {
  //                 displayName: '',
  //                 type: '',
  //                 subType: '',
  //                 value: '',
  //               },
  //             },
  //             {
  //               type: 'EXPRESSION',
  //               operator: '',
  //               lOperand: {
  //                 displayName: '',
  //                 type: '',
  //                 subType: '',
  //                 value: '',
  //               },
  //               rOperand: {
  //                 displayName: '',
  //                 type: '',
  //                 subType: '',
  //                 value: '',
  //               },
  //             },
  //             {
  //               type: 'CONDITION',
  //               operator: 'OR',
  //               statements: [
  //                 {
  //                   type: 'EXPRESSION',
  //                   operator: '',
  //                   lOperand: {
  //                     displayName: '',
  //                     type: '',
  //                     subType: '',
  //                     value: '',
  //                   },
  //                   rOperand: {
  //                     displayName: '',
  //                     type: '',
  //                     subType: '',
  //                     value: '',
  //                   },
  //                 },
  //                 {
  //                   type: 'EXPRESSION',
  //                   operator: '',
  //                   lOperand: {
  //                     displayName: '',
  //                     type: '',
  //                     subType: '',
  //                     value: '',
  //                   },
  //                   rOperand: {
  //                     displayName: '',
  //                     type: '',
  //                     subType: '',
  //                     value: '',
  //                   },
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           type: 'CONDITION',
  //           operator: 'OR',
  //           statements: [],
  //         },
  //       ],
  //     },
  //     {
  //       type: 'CONDITION',
  //       operator: 'OR',
  //       statements: [],
  //     },
  //   ],
  // };
  constructor() {}

  ngOnInit(): void {}
}
