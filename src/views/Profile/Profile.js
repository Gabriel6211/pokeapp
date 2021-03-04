import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import classNames  from "classnames"

import AceTrainer from "../../assets/images/medals/ace-trainer.png"
import BackPacker from "../../assets/images/medals/backpacker.png"
import BestBuddy from "../../assets/images/medals/best-buddy.png"
import Breeder from "../../assets/images/medals/breeder.png"
import CameraMan from "../../assets/images/medals/cameraman.png"
import Hoenn from "../../assets/images/medals/hoenn.png"
import Jogger from "../../assets/images/medals/jogger.png"
import PikachuFan from "../../assets/images/medals/pikachu-fan.png"
import Pilot from "../../assets/images/medals/pilot.png"
import PokemonGoFest2019 from "../../assets/images/medals/pokemon-go-fest-2019-dortmund.png"
import PokemonGoSafari from "../../assets/images/medals/pokemon-go-safari-zone---europe-2017.png"
import PokemonRanger from "../../assets/images/medals/pokemon-ranger.png"
import Purifier from "../../assets/images/medals/purifier.png"
import SafariZoneMontreal from "../../assets/images/medals/safari-zone-montreal.png"
import SafariZoneSentosa from "../../assets/images/medals/safari-zone-sentosa.png"
import UltraLeagueVeteran from "../../assets/images/medals/ultra-league-veteran.png"

import './profile.scss'

import Card from '../../components/Card/Card'
import ProfileCard from '../../components/ProfileCard/ProfileCard'   
import PokeCard from '../../components/PokeCard/PokeCard' 
import MedalCard from '../../components/MedalCard/MedalCard'

class Profile extends Component {

    state = {
        pokemons: []
    }

    colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#f5f5f5'
    }

    async componentDidMount() {
        if(this.props.pokemon.favoritePokemons.length !== 0) {
            let pokemonsArray = []
            let limit = this.props.pokemon.favoritePokemons.length
        
            for(var i = 0; i < limit ; i++) {
                const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.pokemon.favoritePokemons[i])
                pokemonsArray.push(pokemon)
            }
            
            this.setState({ pokemons: pokemonsArray })
        }

    }


    render() {

        let pokemonId =  0;

        const showGrid = classNames('poke-list', { 'show-grid': this.props.pokemon.favoritePokemons.length !== 0})

        return (
            <div className="container">
                <div className="profile-section">
                    <ProfileCard/>
                </div>
                <div className="info-section">
                    <Card className="pokemons-section">
                        <div className={showGrid}>
                            { this.props.pokemon.favoritePokemons.length === 0 ? <h1>Aún no tienes pokemons</h1> : 
                            this.state.pokemons.map((value, index) => {
                                pokemonId = index + 1
                                return <PokeCard key={index} pokemon={value.data} showFavoriteButton={false} />
                            })
                            
                            }
                        </div>
                        
                    </Card>
                    <Card className="medals-section">
                        <div className="medal-list">
                            <MedalCard medalImg={AceTrainer} medalName="Ace Trainer" type="silver" />
                            <MedalCard medalImg={BackPacker} medalName="Back Packer" type="silver" />
                            <MedalCard medalImg={BestBuddy} medalName="Best Buddy" type="bronce" />
                            <MedalCard medalImg={Breeder} medalName="Breeder" type="bronce" />
                            <MedalCard medalImg={CameraMan} medalName="Camera Man" type="bronce" />
                            <MedalCard medalImg={Hoenn} medalName="Hoenn" type="gold" />
                            <MedalCard medalImg={Jogger} medalName="Jogger" type="gold" />
                            <MedalCard medalImg={PikachuFan} medalName="Pikachu Fan" type="locked" />
                            <MedalCard medalImg={Pilot} medalName="Pilot" type="locked" />
                            <MedalCard medalImg={PokemonGoFest2019} medalName="Pokemon Fest" type="unique" />
                            <MedalCard medalImg={PokemonGoSafari} medalName="Pokemon Safari" type="unique" />
                            <MedalCard medalImg={PokemonRanger} medalName="Pokemon Ranger" type="locked" />
                            <MedalCard medalImg={Purifier} medalName="Purifier" type="locked" />
                            <MedalCard medalImg={SafariZoneMontreal} medalName="Safari Montreal" type="unique" />
                            <MedalCard medalImg={SafariZoneSentosa} medalName="Safari Sentosa" type="unique" />
                            <MedalCard medalImg={UltraLeagueVeteran} medalName="Ultra League Veteran" type="locked" />
                        </div>
                    </Card>
                </div>
            </div>
            
        )
    }
}

ProfileCard.propTypes = {
    pokemon: PropTypes.object
}

const mapStateToProps = (state) => ({ pokemon: state.pokemon })

export default connect(mapStateToProps)(Profile);