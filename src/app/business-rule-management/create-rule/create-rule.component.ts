import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/httpclient/api.service';
import { BrmService } from '../service/brm.service';

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
  constructor(private brm: BrmService, api: ApiService) {}

  ngOnInit(): void {}
}
