// first must, should be CONDITION, EXPRESSION
export enum TYPES {
  'CONDITION',
  'EXPRESSION',
}

// FIRST MUST and SHOULD BE OR,then AND
export enum CONDITION_OPERATOR {
  'OR',
  'AND',
}

enum EXPRESSION_OPERATOR {}

export interface IQuery {
  type: string; // CONDITION, Expression
  operator: CONDITION_OPERATOR; // AND, OR
  statements: IStatement[];
}

export interface IStatement {
  type: string;
  lOperand?: IOperand;
  operator?: EXPRESSION_OPERATOR;
  rOperand?: IOperand;
  statements?: any;
}

export interface IOperand {
  displayName: string; //'$user.username';
  type: string; // Operend
  subType: string; // 'data'
  value: string; //'var(emp.age)'
}
