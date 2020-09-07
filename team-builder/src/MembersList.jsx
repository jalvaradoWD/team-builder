import React from 'react'

import Member from './components/Member'

import {MembersContainer} from './styles/MembersList.styles'

const MembersList = ({members, setMembers}) => {
	return (
			<MembersContainer>
					{members
						? members.map(member => {
								return (
									<Member member={member}/>
								);
						  })
						: null}
				</MembersContainer>
	)
}

export default MembersList
