    import Container from '../components/container';
    import MoreStories from '../components/more-stories';
    import HeroPost from '../components/hero-post';
    import Intro from '../components/intro';
    import Layout from '../components/layout';
    import {
        getAllPostsForHome
    } from '../lib/api'
    import Head from 'next/head';
    import {
        CMS_NAME
    } from '../lib/constants';

    var IndexPage = function (props) {
    var router = useRouter();
    var entries = props.entries.length ? props.entries : [];
    var tags = props.tags || [];
    var total = props.total;
    var limit = props.limit;
    var rangeLimit = Math.ceil(total / limit);
    var range = calculateRange(rangeLimit);
    var _a = useState(!!props.page ? props.page : 1), page = _a[0], updatePage = _a[1];
    var _b = useState(''), tag = _b[0], updateTag = _b[1];
    useEffect(function () {
        void router.push({
            pathname: '/',
            query: {
                page: page,
                tag: tag
            }
        });
    }, [page, tag]);
    var handleTagChosen = function (tag) {
        updatePage(1);
        updateTag(tag);
    };
    export default function Index(_a) {
        var preview = _a.preview, allPosts = _a.allPosts;
        var heroPost = allPosts[0];
        var morePosts = allPosts.slice(1);
                return ( <
                    >
                    <
                    Layout preview = {
                        preview
                    } >
                    <
                    Head >
                    <
                    title > Next.js Blog Example with {
                        CMS_NAME
                    } < /title> <
                    /Head> <
                    Container >
                    <
                    Intro / > {
                        heroPost && ( <
                            HeroPost title = {
                                heroPost.title
                            }
                            coverImage = {
                                heroPost.coverImage
                            }
                            date = {
                                heroPost.date
                            }
                            author = {
                                heroPost.author
                            }
                            slug = {
                                heroPost.slug
                            }
                            excerpt = {
                                heroPost.excerpt
                            }
                            />
                        )
                    } {
                        morePosts.length > 0 && < MoreStories posts = {
                            morePosts
                        }
                        />} <
                        /Container> <
                        /Layout> <
                        />
                    )
                }

                export async function getStaticProps({
                    preview = false
                }) {
                    const allPosts = (await getAllPostsForHome(preview)) ?? []
                    return {
                        props: {
                            preview,
                            allPosts
                        },
                    }
                }
