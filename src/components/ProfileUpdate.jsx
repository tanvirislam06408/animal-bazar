"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { CiEdit } from "react-icons/ci";


const ProfileUpdate = () => {

  
  const onSubmit= async(e) => {
    e.preventDefault();
    const formData=new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries());
    const {name,image}=data;
    await authClient.updateUser({
    name: name,
    image: image
})

  }
return (
  <Modal>
    <Button className={'cursor-pointer border-r-green-400'} variant="secondary"><CiEdit /> Edit Profile</Button>
    <Modal.Backdrop>
      <Modal.Container placement="auto">
        <Modal.Dialog className="sm:max-w-md">
          <Modal.CloseTrigger />
          <Modal.Header>
            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              <Envelope className="size-5" />
            </Modal.Icon>
            <Modal.Heading>Edit Profile</Modal.Heading>
          </Modal.Header>
          <Modal.Body className="p-6">
            <Surface variant="default">
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <TextField className="w-full" name="name" type="text">
                  <Label>Name</Label>
                  <Input placeholder="Enter your name" />
                </TextField>
                <TextField className="w-full" name="image" type="url">
                  <Label>Photo Url</Label>
                  <Input placeholder="Enter your image url" />
                </TextField>
                <Modal.Footer>
                  <Button className={'text-[#9AD872] border bg-white'} slot="close" variant="secondary">
                    Cancel
                  </Button>
                  <Button type="submit" className={'bg-[#9AD872]'} slot="close">Save</Button>
                </Modal.Footer>
              </form>
            </Surface>
          </Modal.Body>

        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  </Modal>
);
};

export default ProfileUpdate;