import React from 'react'
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody
} from 'viviui'

const AttendanceTable = ({ ...props }) => {
  const title = ['姓名', '班級', '學號', '到校狀態', '缺席（次數）', '曠課（節數）', '備注']
  const arry = [
    { name: '學生K1A01', class: 'K1A', studentNumber: '01', schoolSituation: '遲到', absent: 2, truant: 1, remark: '' },
    { name: '學生K1A01', class: 'K1A', studentNumber: '01', schoolSituation: '遲到', absent: 2, truant: 1, remark: '' }
  ]
  return (
    <Table mt={4}>
      <TableHead bg='#f2f2f2'>
        <TableRow h='50px' bg='#f2f2f2'>
          {title.map((item, i) => {
            return (
              <TableCell key={i}>
                {item}
              </TableCell>
            )
          })}
        </TableRow>
      </TableHead>
      <TableBody textAlign='center'>
        {arry.map((item, i) => {
          return (
            <TableRow key={i}>
              <TableCell>
                {item.name}
              </TableCell>
              <TableCell>
                {item.class}
              </TableCell>
              <TableCell>
                {item.studentNumber}
              </TableCell>
              <TableCell>
                {item.schoolSituation}
              </TableCell>
              <TableCell>
                {item.absent}
              </TableCell>
              <TableCell>
                {item.truant}
              </TableCell>
              <TableCell>
                {item.remark}
              </TableCell>
            </TableRow>
          )
        })}

      </TableBody>
    </Table>
  )
}
export default AttendanceTable
