package raporsistemi.agd.security;


import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import raporsistemi.agd.entities.User;
import raporsistemi.agd.repositories.UserRepository;



@Component
public class TokenFilter extends OncePerRequestFilter
{
    private TokenService tokenService;
    private UserRepository userRepository;

    public TokenFilter(TokenService tokenService, UserRepository userRepository)
    {
        this.tokenService = tokenService;
        this.userRepository = userRepository;
    }
    protected void doFilterInternal(HttpServletRequest request,HttpServletResponse response,FilterChain filterChain) throws ServletException,IOException
    {
        String authorization=request.getHeader("Authorization");
        if(authorization!=null)
        {
            if(authorization.contains("Bearer "))
            {
                String token=authorization.split("Bearer ")[1];
                if(tokenService.validate(token))
                {
                    String username=tokenService.get(token,"username");
                    if(userRepository.existsByUsername(username))
                    {
                    		User user =userRepository.findByUsername(username);
                    
                            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=new UsernamePasswordAuthenticationToken(user,null,user.getAuthorities());
                            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                        
                    }
                }
            }
        }
        if(filterChain!=null)
            filterChain.doFilter(request,response);
    }
}