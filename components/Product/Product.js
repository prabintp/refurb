import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import styles from './product.module.css'

export default function Product({postNum,search}){
    return(
       <div>
            {search.length === 0 ?
            <h1 className={styles.noDataFound}>No Data Found</h1>
        :
        <Container fluid className="container">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                        <Row>    
                            {search.slice(0, postNum).map(item => (
                            <Col key={item.id} md={4} lg={3}>
                                <div className={styles.card}>
                                <Image
                                    alt={item.image.name}
                                    src={item.image?.formats.small.url}
                                    width={150}
                                    height={170}
                                    />
                                    <h1 className={styles.cardText}>{item.title}</h1>
                                    <p className={styles.cardSubtext}>Price: Rs. {item.price}</p>
                                    <a href={'/detail/' + item.id}>
                                        <button className={styles.button}>Detail</button>
                                    </a>
                                </div>
                            </Col>
                            ))}
                        </Row>
                        </Col>
                    </Row>
            </Container>
            }
      </div>
    )
}
