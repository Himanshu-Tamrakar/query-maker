export interface IQueryBuilder {
  type: TYPES; // Condition, Expression
  operator: CONDITION_OPERATOR; // AND, OR
  statements: IStateMent[];
}

interface IStateMent {
  type: TYPES;
  lOperand?: IOperand;
  operator?: EXPRESSION_OPERATOR;
  rOperand?: IOperand;
  statements?: any;
}

interface IOperand {
  displayName: string; //'$user.username';
  type: string; // Operend
  subType: string; // 'data'
  value: string; //'var(emp.age)'
}

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
