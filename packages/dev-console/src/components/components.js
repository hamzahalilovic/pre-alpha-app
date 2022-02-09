import React from "react";

import { Box, Flex, Text, Image, Input } from "@blend-ui/core";

import PropTypes from "prop-types";

import { BlendIcon } from "@blend-ui/icons";

import mdiSitemap from "@iconify/icons-mdi/sitemap";
import lock from "@iconify/icons-fe/lock";

import styled from "styled-components";

const SidebarContainer = styled(Flex)`
  width: 286px;
  height: 100%;

  padding-top: 130px;
  position: fixed;
  border-radius: 0 40px -40px 0;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;

  ::before,
  ::after {
    position: absolute;
    top: 65px;

    width: 30px;
    height: 30px;
    content: " ";
  }
  ::before {
    left: -52px;
    border-bottom-right-radius: 15px;
    border-width: 0 1px 1px 0;
  }
  ::after {
    right: -30px;
    border-bottom-left-radius: 11px;
    border-width: 0 1px 1px;
  }
  ::after,
  ::before {
    border: 1px solid !transparent;
    transform: rotate(-270deg);
  }
  ::before {
  }
  ::after {
    box-shadow: -6px 5px 0 #f6f7f9;
  }
`;

export const ListMenuItem = styled.li`
  /* */
  color: #969595;
  list-style: none;
  width: 100%;
  &:hover {
    background: #c3c2c2;
    border-left: 4px solid #00847a;

    .icon {
      color: #9fcde3;
    }
    .text {
      color: #9fcde3;
    }
  }
  background-color: ${props => props.backgroundColor};

  font-size: 14px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: 16px;
`;

export const ListMenu = styled.ul`
  margin: 0;
  width: 100%;
  list-style-position: outside;
  align-items: center;
  margin-block-start: 0px;
  padding: 0;
`;

export const MarketBadge = styled.span`
  height: 27px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
`;

const MenuBadge = styled.span`
  width: 91px;
  height: 34px;
  opacity: 0.15;
  display: flex;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const PublisherCard = styled(Flex)`
  width: 246px;
  height: 107px;
  border-radius: 5px;
  border-left: 4px solid #00847a;
  justify-content: center;
  padding-left: 24px;
  flex-direction: column;
  position: relative;
`;

export const StyledInput = styled(Input)`
  border: 1px solid #4b4b4b;
  width: ${props => props.width || "361px"};
  height: 35px;
`;

export const ListItemIconLink = ({
  children,
  icon,
  onClick,
  label,
  color,
  ...props
}) => (
  <Flex flexDirection="row" alignItems="center" height="50px">
    <BlendIcon size="18px" iconify={icon} className="icon" />
    <Text
      className="text"
      color={color}
      ml="16px"
      fontSize="14px"
      textStyle="h7"
      {...props}
    >
      {label}
    </Text>
    <Flex ml="16px">{children}</Flex>
  </Flex>
);

ListItemIconLink.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  color: PropTypes.string,
};

export const DevConsoleSidebar = ({
  // theme,
  items,
  ...props
}) => {
  console.log("SIDEBAR ", props);

  return (
    <SidebarContainer bg="baseWhite">
      <Text fontSize="xs" ml="24px" mb="16px">
        Developer Account
      </Text>
      <ListMenu {...props}>
        {items.map(
          ({
            id,
            label,
            onClick,
            icon,
            backgroundColor,
            badge,
            badgeColor,
            disabled,
            ...rest
          }) => (
            <ListMenuItem
              key={id}
              onClick={onClick}
              backgroundColor={backgroundColor}
            >
              <ListItemIconLink icon={icon}>{label}</ListItemIconLink>
            </ListMenuItem>
          ),
        )}

        <ListMenuItem
          //temporary needs update
          style={{ pointerEvents: "none" }}
        >
          <ListItemIconLink icon={mdiSitemap} color="gray">
            Data Model
          </ListItemIconLink>
          <MenuBadge style={{ background: "cyan" }}>
            <Text fontSize="xs" color="blue">
              Next Up
            </Text>
          </MenuBadge>
        </ListMenuItem>
      </ListMenu>
      <Text fontSize="xs" ml="24px" mt="120px" mb="16px">
        Publisher Account
      </Text>
      <PublisherCard bg="baseMuted" ml="24px">
        <Flex position="absolute" right="6px" top="6px" color="brandAccent">
          <BlendIcon size="18px" iconify={lock} />
        </Flex>
        <Text textStyle="h7" fontWeight="semiBold">
          Publisher Accounts
        </Text>
        <Text fontSize="xs">
          Lore issue dolor sit met, ConnectEDU advising elite, used do also
          temper incident UT
        </Text>
      </PublisherCard>
    </SidebarContainer>
  );
};

DevConsoleSidebar.propTypes = {
  items: PropTypes.instanceOf(Array),
};

export const NavbarContainer = styled(Flex)`
  height: 65px;
  width: 100%;
  padding-left: 64px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const ResourceCard = ({ title, description, src }) => {
  return (
    <Flex
      width="221px"
      height="120px"
      bg="baseMuted"
      borderRadius="5px"
      alignItems="center"
    >
      <Box position="relative" left={-18} marginRight={0} width="100%">
        <Image src={src} />
      </Box>
      <Box
        paddingLeft="-21px"
        alignItems="center"
        paddingTop="23px"
        paddingBottom="23px"
      >
        <Text color="white" fontSize={16} paddingBottom="5px">
          {title}
        </Text>
        <Text color="#ADADAD" fontSize={12}>
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

ResourceCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.node,
};
