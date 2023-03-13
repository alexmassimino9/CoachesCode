import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import {
  // Button,
  // Flex,
  // Heading,
  // Image,
  // Text,
  // TextField,
  // View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
// import { listNotes } from "./graphql/queries";
// import {
//   createNote as createNoteMutation,
//   deleteNote as deleteNoteMutation,
// } from "./graphql/mutations";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const TemporaryDrawer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsMenuOpen((state) => !state);
  };

  const listItems = [
    "Inbox",
    "Starred",
    "Send email",
    "Drafts",
    "All mail",
    "Trash",
    "Spam",
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        {listItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <>
        <Button onClick={toggleDrawer("left", true)}>Nav</Button>
        <Drawer
          anchor={"left"}
          open={isMenuOpen}
          onClose={() => setIsMenuOpen((state) => !state)}
        >
          {list()}
        </Drawer>
      </>
    </div>
  );
};

const App = ({ signOut }) => {
  return (
    <>
      <Button onClick={signOut}>Sign Out</Button>
      <TemporaryDrawer />
    </>
  );

  //
  // const [notes, setNotes] = useState([]);
  // useEffect(() => {
  //   fetchNotes();
  // }, []);
  // async function fetchNotes() {
  //   const apiData = await API.graphql({ query: listNotes });
  //   const notesFromAPI = apiData.data.listNotes.items;
  //   await Promise.all(
  //     notesFromAPI.map(async (note) => {
  //       if (note.image) {
  //         const url = await Storage.get(note.name);
  //         note.image = url;
  //       }
  //       return note;
  //     })
  //   );
  //   setNotes(notesFromAPI);
  // }
  // async function createNote(event) {
  //   event.preventDefault();
  //   const form = new FormData(event.target);
  //   const image = form.get("image");
  //   const data = {
  //     name: form.get("name"),
  //     description: form.get("description"),
  //     image: image.name,
  //   };
  //   if (!!data.image) await Storage.put(data.name, image);
  //   await API.graphql({
  //     query: createNoteMutation,
  //     variables: { input: data },
  //   });
  //   fetchNotes();
  //   event.target.reset();
  // }
  // async function deleteNote({ id, name }) {
  //   const newNotes = notes.filter((note) => note.id !== id);
  //   setNotes(newNotes);
  //   await Storage.remove(name);
  //   await API.graphql({
  //     query: deleteNoteMutation,
  //     variables: { input: { id } },
  //   });
  // }
  // return (
  //   <View className="App">
  //     <Heading level={1}>My Notes App</Heading>
  //     <View as="form" margin="3rem 0" onSubmit={createNote}>
  //       <Flex direction="row" justifyContent="center">
  //         <TextField
  //           name="name"
  //           placeholder="Note Name"
  //           label="Note Name"
  //           labelHidden
  //           variation="quiet"
  //           required
  //         />
  //         <TextField
  //           name="description"
  //           placeholder="Note Description"
  //           label="Note Description"
  //           labelHidden
  //           variation="quiet"
  //           required
  //         />
  //         <View
  //           name="image"
  //           as="input"
  //           type="file"
  //           style={{ alignSelf: "end" }}
  //         />
  //         <Button type="submit" variation="primary">
  //           Create Note
  //         </Button>
  //       </Flex>
  //     </View>
  //     <Heading level={2}>Current Notes</Heading>
  //     <View margin="3rem 0">
  //       {notes.map((note) => (
  //         <Flex
  //           key={note.id || note.name}
  //           direction="row"
  //           justifyContent="center"
  //           alignItems="center"
  //         >
  //           <Text as="strong" fontWeight={700}>
  //             {note.name}
  //           </Text>
  //           <Text as="span">{note.description}</Text>
  //           {note.image && (
  //             <Image
  //               src={note.image}
  //               alt={`visual aid for ${notes.name}`}
  //               style={{ width: 400 }}
  //             />
  //           )}
  //           <Button variation="link" onClick={() => deleteNote(note)}>
  //             Delete note
  //           </Button>
  //         </Flex>
  //       ))}
  //     </View>
  //     <Button onClick={signOut}>Sign Out</Button>
  //   </View>
  // );
  ////////////////////////////
};

export default withAuthenticator(App);
