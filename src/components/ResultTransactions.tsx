import * as React from "react"

interface IResultTransactionsProps
{
    Transactions: ITransaction[];
}

interface ITransaction
{
    Date: Date
    Payee: string
    Category: string
    Memo: string
    Amout: number
}

export class ResultTransactions extends React.Component<IResultTransactionsProps,{}> {

    public render()
    {
        const resultTable = <table>
            <tbody>
                {this.props.Transactions.map(t=><tr key="tr1">
                    <td>{t.Date}</td>
                    <td>{t.Payee}</td>
                    <td>{t.Category}</td>
                    <td>{t.Memo}</td>
                    <td>{t.Amout}</td>
                </tr>)} 
            </tbody>
            </table>
        return <div>{resultTable}</div>
    }
}
