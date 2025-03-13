import React,{JSX, useState} from "react";
import {Flex, Box, Text, Tabs} from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"

function changeState(
  state: string,
  setState: (desiredState: string)=>{},
  desiredState:string 
  ):void
{
    if(state == desiredState) return;

    setState(desiredState);
}

function Header(): JSX.Element{
  const [tabsState, setTabsState]= useState("members");
  
  return(
    <header>
      <Box>
        <Tabs.Root defaultValue="members" variant={"subtle"} value={tabsState} activationMode="manual"> 
        <Tabs.List>
          <Tabs.Trigger value="members" onClick={()=>changeState(tabsState,setTabsState,"members")}>
            <LuUser />
            Members
          </Tabs.Trigger>
          <Tabs.Trigger value="projects" onClick={()=>changeState(tabsState,setTabsState,"projects")}>
            <LuFolder />
            Projects
          </Tabs.Trigger>
          <Tabs.Trigger value="tasks" onClick={()=>changeState(tabsState,setTabsState,"tasks")}>
            <LuSquareCheck />
            Settings
          </Tabs.Trigger>
        </Tabs.List>
        </Tabs.Root>
      </Box>
    </header>
  )
}

export default Header;
