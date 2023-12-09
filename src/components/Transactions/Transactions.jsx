import React from 'react'
import styled from 'styled-components'

export const Transactions = ({ transactions }) => {
  const { amount, currency, id, type } = transactions;
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

const Table = styled.table`
  width: 400px;
  margin: auto;
  box-shadow: 4px 4px 4px silver;
  border-radius: 4px;
`
const Head = styled.thead`
  height: 30px;
  background-color: #00bcd5;
`

const Row = styled.tr`
  text-align: center;
  // align-items: center;
  height: 25px;
  
  `
  const Cell = styled.td`
  vertical-align: middle;
  border: solid 2px #b4bcc5;
  
  span {
    width: 100%;
    display: block;
    text-transform: capitalize;
    text-align: start;
    padding-left: 20px;
  }
`