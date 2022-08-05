import React, { useState } from 'react'
import AnimatePage from 'HOCs/Animate';
import { Box, Flex, Button, Heading3, Input, Text, Fieldset, Label } from 'components/styled/ui';
import { violet } from '@radix-ui/colors';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

function Index() {
  const { user } = useSelector((state) => state.auth);
  const [refferalModel, setRefferalModel] = useState(false);
  console.log(user)
  console.log({ refferalModel })
  return (
    <>
      <Box css={{ borderColor: violet.violet8 }} className="p-3 rounded-xl border">
        <Text css={{ marginBottom: 2 }}>{"Invite Friends &"}</Text>
        <Heading3>{"Start Earning"}</Heading3>
        <Text>Invite a friend to rego and enjoy a lifetime of earnings from their activity.Earn</Text>
        <div className="flex flex-col lg:grid lg:grid-cols-3 p-3 gap-2">
          <div className="lg:col-span-2">Data</div>
          <Box css={{ borderColor: violet.violet8 }} className="rounded-xl p-3 border">
            <Flex className='flex-col w-4/5 gap-3 mx-auto'>
              <Heading3 className="text-center">Your Default Campaign</Heading3>
              <Fieldset>
                <Label htmlFor='link' >Link</Label>
                <Input id="link" name="link" type="text" value={`https://regoex.com/signup?code=${user?.ref_code}`} />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="code" >Code</Label>
                <Input id="code" name="code" type="text" value={user.ref_code} />
              </Fieldset>
              <Button
                onClick={() => {
                  setRefferalModel(true)
                }}>Share</Button>
            </Flex>
          </Box>
        </div>
      </Box>

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
          <Button variant="danger!important" onClick={() => setRefferalModel(false)} style={{ height: 40, width: 80 }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AnimatePage(Index);
