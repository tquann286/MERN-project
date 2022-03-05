import React, { useState, useEffect } from 'react'
import {
	Container,
	Grow,
	Grid,
	AppBar,
	TextField,
	Button,
	Paper,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import ChipInput from 'material-ui-chip-input'

import { getPosts } from '../../actions/posts'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import Pagination from '../Pagination'

function useQuery() {
	return new URLSearchParams(useLocation().search)
}

const Home = () => {
	const [currentId, setCurrentId] = useState(0)
	const dispatch = useDispatch()
  const query = useQuery();

	useEffect(() => {
		dispatch(getPosts())
	}, [currentId, dispatch])

	return (
		<Grow in>
			<Container>
				<Grid
					container
					justifyContent='space-between'
					alignItems='stretch'
					spacing={3}
				>
					<Grid item xs={12} sm={7}>
						<Posts setCurrentId={setCurrentId} />
					</Grid>
					<Grid item xs={12} sm={4}>
						<Form currentId={currentId} setCurrentId={setCurrentId} />
						<Paper elevation={6}>
							<Pagination />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Grow>
	)
}

export default Home
