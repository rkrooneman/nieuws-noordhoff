import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import {
    getAllPostsForHome
} from '../lib/api'
import Head from 'next/head'
import {
    CMS_NAME
} from '../lib/constants'



export default function Index({
    preview,
    allPosts
}) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
}
type Props = {
    entries: allPosts[];
    tags: {
        id: string,
        name: string
    } [];
    url: any;
    total: number;
    skip: number;
    limit: number;
    page ? : number;
}

const IndexPage: NextPage = (props: Props) => {
        const router = useRouter();
        const entries = props.entries.length ? props.entries : [];
        const tags = props.tags || [];
        const total = props.total;

        const limit = props.limit;
        const rangeLimit = Math.ceil(total / limit);
        const range = calculateRange(rangeLimit);

        const [page, updatePage] = useState(!!props.page ? props.page : 1);
        const [tag, updateTag] = useState('');

        useEffect(() => {
            void router.push({
                pathname: '/',
                query: {
                    page: page,
                    tag: tag
                }
            });
        }, [page, tag]);

        const handleTagChosen = (tag) => {
            updatePage(1);
            updateTag(tag);
        };

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
            } < /title> < /
            Head > <
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
                />} < /
                Container > <
                    /Layout> < /
                    >
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