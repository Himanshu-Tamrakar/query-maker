import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/httpclient/api.service';
import { BrmService } from '../service/brm.service';
interface IOperator {
  code: string;
  message: string;
  data: any;
}

@Component({
  selector: 'app-create-rule',
  templateUrl: './create-rule.component.html',
  styleUrls: ['./create-rule.component.scss'],
})
export class CreateRuleComponent implements OnInit {
  types: object;
  query: any = {
    type: 'CONDITION',
    operator: 'OR',
    statements: [
      {
        type: 'EXPRESSION',
        operator: '<',
        lOperand: {
          displayName: '100',
          type: 'integer',
          subType: '',
          value: '',
        },
        rOperand: {
          displayName: '101',
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
  constructor(private brm: BrmService, api: ApiService) {
    // this.brm.getOperators().subscribe((res: any) => (this.types = res?.data));
    this.types = {
      string: ['contains', 'like', '=', '!='],
      category: ['in', 'not in', '=', '!='],
      integer: ['=', '!=', '>', '<', '>=', '<='],
      float: ['=', '!=', '>', '<', '>=', '<='],
      time: ['=', '!=', '>', '<', '>=', '<='],
      date: ['=', '!=', '>', '<', '>=', '<='],
      boolean: ['='],
    };
  }

  ngOnInit(): void {}
}
