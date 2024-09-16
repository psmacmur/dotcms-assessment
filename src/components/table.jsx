/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from 'react-aria-components';
import { BlogComponent } from './blogComponents';

const TableComponent = (props) => {
  console.log('TableComponent', props);
  // @ts-ignore
  const headers = props.content.filter(
    (rowContent) => rowContent.content[0]?.type === 'tableHeader'
  );
  const rows = props.content.filter(
    (rowContent) => rowContent.content[0]?.type === 'tableCell'
  );
  return (
    <Table aria-label="Files" selectionMode="multiple">
      <TableHeader>
        {headers.map((rowContent, i) => {
          return rowContent.content?.map((columnContent, j) => (
            <Column key={j} isRowHeader={j === 0}>
              {columnContent.content.map((content, k) => (
                <BlogComponent contentItem={content} key={i * j + k} />
              ))}
            </Column>
          ));
        })}
      </TableHeader>
      <TableBody>
        {rows.map((rowContent, i) => {
          return (
            <Row key={i}>
              {rowContent.content?.map((columnContent, j) => (
                <Cell key={j}>
                  {columnContent.content.map((content, k) => (
                    <BlogComponent contentItem={content} key={i * j + k} />
                  ))}
                </Cell>
              ))}
            </Row>
          );
        })}
      </TableBody>

      {
        // <TableHeader>
        //   <Column>test</Column>
        //   <Column isRowHeader>Name</Column>
        //   <Column>Type</Column>
        //   <Column>Date Modified</Column>
        // </TableHeader>
        // <TableBody>
        //   <Row>
        //     <Cell>test</Cell>
        //     <Cell>Games</Cell>
        //     <Cell>File folder</Cell>
        //     <Cell>6/7/2020</Cell>
        //   </Row>
        //   <Row>
        //     <Cell>test</Cell>
        //     <Cell>Program Files</Cell>
        //     <Cell>File folder</Cell>
        //     <Cell>4/7/2021</Cell>
        //   </Row>
        //   <Row>
        //     <Cell>test</Cell>
        //     <Cell>bootmgr</Cell>
        //     <Cell>System file</Cell>
        //     <Cell>11/20/2010</Cell>
        //   </Row>
        //   <Row>
        //     <Cell>test</Cell>
        //     <Cell>log.txt</Cell>
        //     <Cell>Text Document</Cell>
        //     <Cell>1/18/2016</Cell>
        //   </Row>
        // </TableBody>
      }
    </Table>
  );
};

export { TableComponent };
