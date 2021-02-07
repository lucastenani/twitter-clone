import styled, { css } from "styled-components";
import { Twitter } from "@styled-icons/bootstrap/Twitter";
import { Bookmark } from "@styled-icons/boxicons-regular/Bookmark";
import { Hashtag } from "@styled-icons/heroicons-outline/Hashtag";
import { ListUl } from "@styled-icons/boxicons-regular/ListUl";
import { MoreHoriz } from "@styled-icons/material-rounded/MoreHoriz";
import {
  Home,
  Notifications,
  Email,
  Person,
  ExitToApp
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;
export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;
export const Logo = styled(Twitter)`
  width: 34px;
  height: 34px;
  margin-bottom: 20px;

  > path {
    color: var(--white);
  }
`;
export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
       display: inline;
       margin-left: 19px;
       font-weight: bold;
       font-size: 19px;
    }
    padding-right: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 33px;
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
      display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover, &:active {
    > span, svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--white);
`;
export const HomeIcon = styled(Home)`${iconCSS} `;
export const EmailIcon = styled(Email)`${iconCSS} `;
export const BookmarkIcon = styled(Bookmark)`${iconCSS} `;
export const ProfileIcon = styled(Person)`${iconCSS} `;
export const BellIcon = styled(Notifications)`${iconCSS} `;
export const ExploreIcon = styled(Hashtag)`${iconCSS} `;
export const ListIcon = styled(ListUl)`${iconCSS} `;
export const MoreIcon = styled(MoreHoriz)`${iconCSS} `;
