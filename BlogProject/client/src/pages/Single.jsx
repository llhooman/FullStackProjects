import React from "react";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import postImg from "../images/postImgs/6.jpg";
import userProfile from "../images/postImgs/user.jpg";
import { Link } from "react-router-dom";
//temp imports
import img1 from "../images/postImgs/1.jpg";
import img2 from "../images/postImgs/2.jpg";
import img3 from "../images/postImgs/3.jpg";
import img4 from "../images/postImgs/4.jpg";
const single = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: img1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: img2,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: img3,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: img4,
    },
  ];
  return (
    <div className="single">
      <div className="content">
        <img src={postImg} alt="" />
        <div className="user">
          <img src={userProfile} alt="" />
          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
          asperiores?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          doloribus aspernatur at voluptatibus accusamus non nihil officia velit
          tenetur nostrum pariatur cumque, optio quidem. Ad nulla aperiam neque
          officia possimus ullam beatae impedit . Aliquid temporibus quo laborum
          facere, odit atque cum ex. Ipsa ullam rerum iure in rem velit minus
          omnis dicta facilis quas! Totam delectus reprehenderit nam voluptatem
          similique tempora, quia ab porro quidem perferendis neque. Praesentium
          asperiores consectetur a alias, itaque ullam corporis adipisci, ad
          quos dicta aperiam quasi , totam earum illo soluta numquam esse sequi
          accusamus veniam repellendus architecto laboriosam. Eaque quisquam
          nesciunt distinctio dolore odio nam, voluptas, recusandae fugit vel
          deserunt deleniti autem cupiditate cumque quis animi aliquid eum
          pariatur quo placeat voluptatem ea debitis voluptatum. Repellendus
          sapiente commodi a! Deserunt quisquam tempore sunt accusamus optio
          iste, amet placeat quae exercitationem voluptates! Dicta aperiam, hic
          ut quos quae totam eum molestiae impedit quaerat libero nostrum earum
          voluptatem eos. Commodi amet totam quaerat aperiam veritatis illum
          quas molestiae officia excepturi dolorum debitis iure minus quibusdam
          natus assumenda quae sunt voluptatibus, doloribus eaque repudiandae
          delectus aspernatur ullam sapiente? Numquam quas eius minima
          dignissimos inventore animi, distinctio ipsam cum quam magni
          excepturi? Fugiat id rem, laudantium et facilis numquam reprehenderit?
          Praesentium quam dignissimos tenetur voluptate aliquam culpa quibusdam
          sed maxime sit ducimus porro non, maiores enim velit labore voluptatum
          quod autem accusantium ipsum? Obcaecati eveniet exercitationem quos!
          Obcaecati odio modi dolorum dicta blanditiis nisi, maiores accusantium
          nemo facere quae, error mollitia? Dolorum natus quia saepe porro enim
          modi impedit debitis odit, velit aperiam quae nesciunt quo veniam.
          Quibusdam quidem magni unde optio error eos molestias quis nisi
          fugiat, sit reprehenderit amet? Eos expedita repellendus blanditiis
          doloremque quos voluptates reprehenderit, iusto voluptatem aliquam
          voluptatum id voluptate! Hic distinctio error expedita numquam cumque
          quibusdam tempora dolorem quo quam ad. Dolores aperiam delectus qui
          voluptates pariatur sint molestiae deleniti doloribus, similique eius
          maxime quisquam facere mollitia ut autem labore at asperiores culpa?
          Nihil sint quos consequuntur vero ea animi hic veritatis reiciendis
          obcaecati officia, rerum delectus molestias dolores fuga minima veniam
          repellendus iste laudantium adipisci aspernatur consequatur temporibus
          iusto. Consequatur quam similique odio animi unde officia eligendi
          dicta autem, voluptatem voluptatibus libero aspernatur error voluptate
          temporibus perferendis atque obcaecati magni quisquam molestiae
          accusamus? Corporis voluptates repellat repellendus, aliquid quam
          optio, perspiciatis at amet non, numquam excepturi et omnis ullam
          sint? Asperiores repudiandae sed, maxime totam perferendis aut nam
          obcaecati illum sequi. Commodi, ratione? Nobis qui sunt vitae officia
          esse est blanditiis veritatis reprehenderit ipsam quidem odio, eius
          natus ullam distinctio provident alias, laborum id praesentium
          voluptas, accusamus pariatur earum. Error velit illo rem deserunt quis
          ipsa sunt ducimus et numquam consequatur, provident, unde officia
          magnam asperiores dolorem quisquam iste ipsum eligendi neque quas? Non
          voluptates dolore veritatis maxime nihil quia numquam excepturi
          explicabo eos in, cum soluta ratione quae accusantium molestiae,
          pariatur voluptatum sed provident facere ut laboriosam repellat quasi
          sit. Mollitia corrupti odit porro consequuntur incidunt sint delectus
          culpa ipsa similique provident illo dolorem distinctio in ex officia
          enim, alias iste dolor ad perspiciatis maxime optio, temporibus animi.
          Sint quas eum alias? Veritatis ipsum iste deserunt ea totam temporibus
          vitae necessitatibus. Vitae rem, vero aliquid impedit excepturi et
          assumenda qui. Consequatur, autem obcaecati eligendi delectus soluta
          minima omnis voluptate, consequuntur fuga, eos assumenda mollitia.
          Laborum incidunt commodi autem ipsam laboriosam obcaecati, vel
          voluptatum fuga qui error tenetur nam natus. Nulla perspiciatis
          repellat quae nemo reiciendis dolor deserunt. Asperiores dolorem autem
          provident tempora esse atque repudiandae veniam consequuntur, dolor
          soluta debitis ipsum nobis, est possimus amet labore. Inventore quos
          distinctio cumque voluptatum, corrupti illum ad iusto quae labore sed
          quia. Aperiam libero quasi hic fuga alias tempora dolores, nostrum
          necessitatibus. Magni facilis odio neque iste atque eveniet quod iusto
          magnam, autem nemo esse iure excepturi dolorem quia incidunt cumque,
          at facere saepe! Harum quisquam enim, voluptates non dolore repellat
          incidunt iure soluta dicta nesciunt voluptatibus, officiis ullam illo
          commodi ab unde quam ipsa ea dolor fuga, eos tempora adipisci
          laboriosam! Fuga cupiditate sint delectus fugiat provident quos ipsum
          praesentium adipisci ipsam et! Saepe assumenda accusantium sequi velit
          id eum ea iste veritatis nisi voluptates, non magni consequuntur
          laborum doloribus aut. Similique ipsum nam sunt iusto perspiciatis,
          magnam totam! Aperiam laudantium repellat consequatur praesentium ut.
          Alias nostrum eligendi dolorum corrupti vitae, necessitatibus quisquam
          earum est a facilis veniam delectus? Ipsa, numquam alias, quidem
          obcaecati iste eum quo officia minus sint soluta atque error magni
          itaque unde corporis distinctio tempore nobis quisquam. Maxime
          eligendi corporis harum alias dolorem vero quis mollitia excepturi
          deserunt obcaecati exercitationem qui temporibus praesentium tenetur
          quia, voluptas saepe, quibusdam ratione repellendus, a eaque. Sequi
          corrupti quod, voluptate cumque possimus ut dignissimos enim quas
          tenetur aliquam cupiditate porro unde rerum esse officia saepe! Dicta
          velit deleniti natus, illum odio animi placeat ea laboriosam ullam
          nostrum accusamus voluptatibus temporibus cupiditate necessitatibus
          veritatis, cum aliquam sint quisquam? Magni omnis quia dolore quod
          possimus perferendis iure nihil aliquid voluptas sint ipsam nobis,
          expedita quaerat aut deleniti ipsa ab quas quis provident fugit
          aperiam qui! Nam animi enim, molestias perspiciatis consectetur
          temporibus ad ipsam facilis reprehenderit accusantium sit omnis
          veritatis soluta aliquid. Obcaecati dolore necessitatibus, quos
          impedit deserunt nesciunt? Neque eligendi, pariatur reiciendis ea
          cumque possimus ratione vitae quo sint distinctio alias eum quas
          tenetur assumenda veritatis laboriosam odio quis iste. Sit minus porro
          blanditiis aliquid unde nobis, labore dolorum ratione exercitationem
          impedit voluptatum iusto ex modi quam sapiente, molestias fugit illo.
          Vero, aliquam repudiandae, ipsum sint accusantium quod porro
          dignissimos voluptas, ipsa perferendis quaerat magni odio. Sapiente
          quis amet libero, commodi tempore error dicta eveniet perspiciatis
          vitae veniam quod soluta optio assumenda beatae odit quam ipsum unde
          culpa aliquid consectetur! Perferendis, laboriosam! Itaque officiis
          neque nesciunt. Qui itaque incidunt obcaecati iure nisi quam culpa,
          reiciendis, fugit saepe natus possimus delectus rem officiis
          laudantium est quis eaque, dolor doloremque! Eos consectetur provident
          omnis sunt, maiores libero fuga veniam dolorem beatae necessitatibus.
          Nisi eum porro magni expedita velit laboriosam eius consectetur est,
          facere quidem. Eaque voluptatum fuga saepe officiis blanditiis maiores
          dolores quae, reiciendis exercitationem. Aut.
        </p>
      </div>
      <div className="menu">
        <h1>other posts you may like</h1>
        {posts.map((post) => (
          <div className="post">
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default single;
