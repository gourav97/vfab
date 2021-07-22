import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collections-overview/collections-overview.components.jsx';
import CollectionPage from '../collection/collection.component.jsx';

import { connect } from 'react-redux';

import { fetchCollectionsStartAsync, fetchCollectionStart} from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector.js';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner  = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    

    componentDidMount() {
        const { fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();              
    }




    render() {
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;
        
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching}{...props}/>}  />
                <Route path={`${match.path}/:collectionId`}  render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded}{...props}/>} />
            </div>
        )
        
    }

};

const mapStateToProps = createStructuredSelector({
    isCollectionFetching : selectIsCollectionFetching,
    isCollectionLoaded : selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);