import React from 'react'
import { Table, Head, Row, Cell } from './Transactions.styled'

export const Transactions = ({ transactions }) => {
  return (
    <Table className="transaction-history">
      <Head>
        <Row>
          <Cell>Type</Cell>
          <Cell>Amount</Cell>
          <Cell>Currency</Cell>
        </Row>
      </Head>
      <tbody>
        {transactions.map((transaction) => {
        return (
          <Row key={transaction.id}>
            <Cell><span>{transaction.type}</span></Cell>
            <Cell>{transaction.amount}</Cell>
            <Cell>{transaction.currency}</Cell>
          </Row>
        )
      })}
      </tbody>
    </Table>
  )
}

