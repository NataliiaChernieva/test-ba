import styled from '@emotion/styled';

export const ListItem = styled.li`
   padding:16px;
   list-style: none;
   border-radius: 20px;
   background-color: #ffffff; 
   &:not(:last-child) {
       margin-bottom: 16px;
   }
`;

export const ListItemBox = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const FacultyName = styled.h2``;

export const FacultyDirector = styled.p`
`;

export const FacultyDescription = styled.p``;

export const FacultyTeachers = styled.ul``;

export const ExpandContainer = styled.div``;

export const FacultyPhone = styled.p``;
 