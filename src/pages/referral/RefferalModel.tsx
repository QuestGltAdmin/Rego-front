import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

function index(props:any) {
  const { setRefferalModel, refferalModel } = props;
  return (
    <>
      <Modal show={refferalModel} onHide={() => setRefferalModel(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Share ...</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <FacebookShareButton
            url={'https://www.facebook.com/login/'}
            quote={'Facebook'}
          >
            <FacebookIcon size={40} round={true} onClick={() => setRefferalModel(false)} />
          </FacebookShareButton>
          <WhatsappShareButton
            url={'https://web.whatsapp.com/'}
          >
            <WhatsappIcon size={40} round={true} onClick={() => setRefferalModel(false)} />
          </WhatsappShareButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setRefferalModel(false)} style={{ height: 40, width: 80 }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default index