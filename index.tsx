import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AreaChart } from '@/components/ui/chart'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const monthlyRevenue = [
  { month: 'Jan', revenue: 15000 },
  { month: 'Feb', revenue: 15200 },
  { month: 'Mar', revenue: 15400 },
  { month: 'Apr', revenue: 15100 },
  { month: 'May', revenue: 15300 },
  { month: 'Jun', revenue: 15600 },
]

const recentTransactions = [
  { id: 1, property: 'Seaside Villa', amount: 2500, date: '2024-03-01', type: 'Income' },
  { id: 2, property: 'City Apartment', amount: -150, date: '2024-02-28', type: 'Expense' },
  { id: 3, property: 'Mountain Cabin', amount: 1800, date: '2024-02-25', type: 'Income' },
]

export default function Revenue() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Monthly rental income across all properties</CardDescription>
        </CardHeader>
        <CardContent>
          <AreaChart
            data={monthlyRevenue}
            index="month"
            categories={['revenue']}
            colors={['green']}
            valueFormatter={(value) => `$${value}`}
            className="h-72"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest income and expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.property}</TableCell>
                  <TableCell>
                    <Badge variant={transaction.amount > 0 ? 'default' : 'destructive'}>
                      